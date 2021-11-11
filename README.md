# Klepper Tree 3

## Description
This app demonstrates a simple JS tree component written in plain ol' JavaScript.

The app loads a number of JS objects (found in '''/api-config''' folder), combines them into an array, then renders the result as a tree consisting of folder icons and document icons. User can open/close the folders by clicking on them. When user clicks on a document, the associated JSON for that leaf node is displayed to the right.

The tree can contain folders inside folders, good examples being the "Device" and "Users" folder.

## Context
The tree was written for a former employer several years ago. It was for an internal app called "SocketMan" that allowed mobile developers to call the backend API using a socket connection to make sure the API was called correctly from within their iOS and Android apps.

This code was "quick-and-dirty", for I was the only backend developer on the team. Were I rewriting it today, I would:
- Place the tree's code into a JS class
- Design it for reusability


## Installation
Download this repo. Open the ```index.html``` page using a browser (tested on Mac in Chrome, Safari, Firefox, and Brave browsers). Assuming security settings are correct, everything should work OK.


## KlepperTree3 Code Walkthrough
The tree is implemented using one JS file, one CSS file, and two PNGs:
- KlepperTree3.js 
    - recursively converts JS objects into nested unordered lists
    - assigns styles to the folder and leaf nodes of the tree
    - toggles visibility of the items inside a folder when it is clicked

- KlepperTree3.css
    - Based on https://two-wrongs.com/draw-a-tree-structure-with-only-css
    - Uses pure CSS for everything except for the folder and document PNGs

- folder.png and page_white.png
    - Icons for the folders and leaf nodes in the tree
    - From http://www.famfamfam.com/lab/icons/silk/
    - Icons associated with folders and leaf nodes in the above CSS file


## Files for the Demo
To demonstrate the tree in action, we need a data source for the tree, as well as a web page to display it in!
- The tree is populated from the files in ```api-config``` folder. The examples are based on the API I developed for a previous employer. Critical or sensitive information has been replaced with "***".
- The tree is displayed in a div in the ```index.html``` file.
- The ```index.html``` file also preloads the data files.
- The page (other than the tree) is styled using the ```main.css``` file.
- The ```main.js``` file does several things:
    - It associates the ```treeHolder``` div in the HTML file with KlepperTree3 
    - It populates the tree from files in the ```api-config``` folder
    - It builds a flattened version of the tree which is used for quick data lookup when a leaf is clicked
    - It handles clicks on the leaf nodes of the tree.


## Basic Usage
1. In the ```index.html``` file, add a div that will hold the tree
2. Also in the ```index.html``` file, preload data files as well as various JS and CSS files
3. In ```main.js``` add an onPageLoad function and 
4. When the page loads, do the following:
    - Get a JS reference to the tree's div (called ```treeHolderDiv``` in ```main.js```)
    - Combine the data files into a large JSON array called ```combinedJson```
    - Feed the data into the tree using the renderTreeJson function. This takes two arguments:
        - The combined JSON
        - An on-click callback handler (called ```populateMessage```)
    - Assign the HTML string returned by ```populateMessage``` to the innerHTML of the tree div, like this: ```treeHolderDiv.innerHTML = renderTreeJson(combinedJson, "populateMessage");```


## Data File Format
Folder nodes have either two or three properties:
- ```name```, the string which is displayed next to the folder icon in the tree
- ```description```, a string that is not used in this demo
- ```children```, an optional array of either folder nodes or leaf nodes.

Leaf nodes have tree properties:
- ```name```, the string displayed next to the document icon
- ```description```, a string that is not used in this demo
- ```message```, a JSON object of arbitrary structure.

Here is a truncated example of a data file used to populate the tree:

```
let deviceJson =
    {
        name: "Device",
        description: "",
        children:
            [
                {
                    name: "Device Management",
                    description: "",
                    children:
                        [
                            {
                                name: "Get Device",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***"
                                    }
                            },
                            ...
                            {
                                name: "Update Device",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***",
                                        "body":
                                            {
                                                "name": "Marge's New Android Phone",

                                                "os_version": "[ 8, 2, 17, 5 ]",
                                                "carrier": "AT&T",

                                                "registration_step": "MDM enroll complete",
                                                "device_state": "active",
                                                "registration_token": ""
                                            }
                                    }
                            }
                        ]
                },
                {
                    name: "Location",
                    description: "",
                    children:
                        [
                            {
                                name: "Get Location",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "device_id": "***",
                                        "body":
                                            {
                                                "min_date": "2018-05-18T21:00:00Z",
                                                "max_date": "2018-05-31T21:44:50.506Z"
                                            }
                                    }
                            },
                            {
                                name: "Add Location",
                                description: "",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "device_id": "***",
                                                "user_id": "***",
                                                "track_date": "2018-05-18T22:55:50.506Z",
                                                "latitude": 40.062911,
                                                "longitude": -75.467508,
                                                "speed" : 10.5,
                                                "accuracy": 20.5,
                                                "action": "leave",
                                                "last_known_timezone":"EDT",
                                                "last_known_offset": -240
                                            }
                                    }
                            },
                            {
                                name: "Add geofence event",
                                description: "Add geofence event",
                                message:
                                    {
                                        "action": "***",
                                        "body":
                                            {
                                                "user_id": "***",
                                                "device_id": "***",
                                                "track_date": "2018-06-22T14:15:20.506Z",
                                                "named_location_id": 3,
                                                "action": "enter"
                                            }
                                    }
                            }
                        ]
                }
            ]
    };
```