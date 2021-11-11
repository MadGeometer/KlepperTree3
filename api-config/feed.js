let feedJson =
    {
        name: "Feed",
        description: "",
        children:
            [
                {
                    name: "Create",
                    description: "",
                    children:
                    [
                        {
                            name: "Child App Install",
                            description: "Create a child app install feed item",
                            message:
                                {
                                    "action": "***",
                                    "body":
                                        {
                                            "item_type": "child_app_install",
                                            "group_id": "***",
                                            "user_id": "***",
                                            "device_id": "***",
                                            "details":
                                                {
                                                    "registration_step": "done"
                                                }
                                        }
                                }
                        },
                        {
                            name: "Screen Time Exhausted",
                            description: "Create a screen time exhausted item",
                            message:
                                {
                                    "action": "***",
                                    "body":
                                        {
                                            "item_type": "screentime_exhausted",
                                            "group_id": "***",
                                            "user_id": "***",
                                            "device_id": "***",
                                            "details":
                                                {
                                                    "current_mode_id": "***",
                                                    "reason": "screentime_exhausted",
                                                    "next_transition_time": "2018-11-28T05:00:01Z"
                                                }
                                        }
                                }
                        },
                        {
                            name: "Block",
                            description: "Create a block",
                            message:
                                {
                                    "action": "***",
                                    "body":
                                        {
                                            "item_type": "block",
                                            "group_id": "***",
                                            "user_id": "***",
                                            "device_id": "***",
                                            "details":
                                                {
                                                    "datetime": "2018-11-27T19:32:58Z",
                                                    "url": "https://www.google.com/complete/search?client=chrome-omni&gs_ri=chrome-ext-ansg&xssi=t&q=nud&oit=1&cp=3&pgcl=9&gs_rn=42&psi=Myu2AH-kr2F9Af0v&sugkey=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw",
                                                    "category_ids": [
                                                        "1005"
                                                    ]
                                                }
                                        }
                                }
                        },
                        {
                            name: "Search",
                            description: "Create a feed item for search",
                            message:
                                {
                                    "action": "***",
                                    "body":
                                        {
                                            "item_type": "search",
                                            "group_id": "***",
                                            "user_id": "***",
                                            "device_id": "***",
                                            "details":
                                                {
                                                    "search_terms": [
                                                        "newport",
                                                        "cigarettes"
                                                    ],
                                                    "datetime": "2018-11-27T19:32:54Z"
                                                }
                                        }
                                }
                        },
                        {
                            name: "Geofence",
                            description: "Create a feed item for a specified group",
                            message:
                                {
                                    "action": "***",
                                    "body":
                                        {
                                            "item_type": "location/geofence",
                                            "group_id": "***",
                                            "user_id": "***",
                                            "device_id": "***",
                                            "details":
                                                {
                                                    "datetime": "2018-07-05T18:46:44.215Z",
                                                    "named_location_id": 1,
                                                    "action": "enter"
                                                }
                                        }
                                }
                        },
                        {
                            name: "Advice For One Group",
                            description: "Create an advice feed item for one group only!",
                            message:
                                {
                                    "action": "***",
                                    "body":
                                        {
                                            "item_type": "advice",
                                            "group_id": "***",
                                            "details":
                                                {
                                                    "icon_url": "***",
                                                    "click_thru_url": "***",
                                                    "datetime": "2018-11-27T13:29:00.00Z",
                                                    "title": "From the Parent Portal",
                                                    "link_text": "Why Teen Apps like Spotafriend are Concerning"
                                                }
                                        }
                                }
                        },
                        {
                            name: "Create Global Feed Item (Admin Only)",
                            description: "Create a global feed item",
                            message:
                                {
                                    "action": "***",
                                    "body":
                                        {
                                            "item_type": "***",
                                            "group_id": "***",
                                            "details":
                                                {
                                                    "icon_url": "***",
                                                    "click_thru_url": "***",
                                                    "title": " ",
                                                    "link_text": "Welcome!!!"
                                                }
                                        }
                                }
                        }
                    ]
                },
                {
                    name: "Retrieve",
                    description: "",
                    children:
                    [
                        {
                            name: "By Group ID",
                            description: "Retrieve feed items by group ID",
                            message:
                                {
                                    "action": "***",
                                    "group_id": "***",
                                    "scan_direction_forward": false,
                                    "exclude_ads": true
                                }
                        },
                        {
                            name: "By Group ID and Paginated",
                            description: "Retrieve feed items by group ID",
                            message:
                                {
                                    "action": "***",
                                    "group_id": "***",
                                    "exclusive_start_key":
                                        {
                                            "create_timestamp": 1542042665429,
                                            "group_id": "***"
                                        },
                                    "max": 50,
                                    "scan_direction_forward": true
                                }
                        }
                    ]
                }

            ]
    };