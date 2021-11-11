/*
// scripts/KlepperTree3.js

Recursively converts JSON docs into unordered lists!
*/

let treeIndex = 0;

function renderTreeJson(treeJson, leafClickFunctionName)
{
    return "<ul>" + convertJsonToTreeHtml(treeJson, leafClickFunctionName) + "</ul>";
}

function convertJsonToTreeHtml(treeJson, leafClickFunctionName)
{
    let treeHtml = "";

    if(treeJson.children && treeJson.children.length > 0)
    {
        treeHtml += "<li>";
        treeHtml += "<span onclick='toggleSubTree(this)' class='folder'>" + treeJson.name + "</span>";

        if(treeJson.isRoot)
        {
            treeHtml += "<ul>";
        }
        else
        {
            treeHtml += "<ul style='display:none'>";
        }

        let numChildren = treeJson.children.length;

        for(let i = 0; i < numChildren; i++)
        {
            treeHtml += convertJsonToTreeHtml(treeJson.children[i], leafClickFunctionName);
        }

        treeHtml += "</ul>";
        treeHtml += "</li>";
    }
    else
    {
        treeHtml += "<li class='leaf' onclick='" +  leafClickFunctionName + "(" + treeIndex + ")'>";
        treeHtml += treeJson.name;
        treeHtml += "</li>";

        treeIndex += 1;
    }

    return treeHtml;
}

function toggleSubTree(e)
{
    let nextSiblingElement = e.nextSibling;

    if(nextSiblingElement.style.display === "none")
    {
        nextSiblingElement.style.display = "";
    }
    else
    {
        nextSiblingElement.style.display = "none";
    }
}