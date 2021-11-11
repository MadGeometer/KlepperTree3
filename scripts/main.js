let combinedJson;
let requestMessages = [];

let messageText;
let outputText;
let treeHolderDiv;

function onPageLoad()
{
    getUiElements();
    combinedJson = populateTree();
    extractMessagesFromJson(combinedJson);
}

function getUiElements()
{
    messageText = document.getElementById("messageTxt");
    outputText = document.getElementById("outputTxt");
    treeHolderDiv = document.getElementById("treeHolder");
}

function populateTree()
{
    combinedJson =
        {
            name: "Root",
            isRoot: true,
            description: "This is the root!",
            children: []
        };

    combinedJson.children.push(statusJson);
    combinedJson.children.push(accountsJson);
    combinedJson.children.push(administrativeJson);
    combinedJson.children.push(applicationJson);
    combinedJson.children.push(appSettingJson);
    combinedJson.children.push(authenticateJson);
    combinedJson.children.push(avatarJson);
    combinedJson.children.push(categoryJson);
    combinedJson.children.push(categorySettingJson);
    combinedJson.children.push(childStatusApiJson);
    combinedJson.children.push(dataAnalysisJson);
    combinedJson.children.push(deviceJson);
    combinedJson.children.push(deviceApplicationJson);
    combinedJson.children.push(deviceEventJson);
    combinedJson.children.push(feedJson);
    combinedJson.children.push(generalSettingJson);
    combinedJson.children.push(groupJson);
    combinedJson.children.push(licenseJson);
    combinedJson.children.push(mdmInfoJson);
    combinedJson.children.push(modeJson);
    combinedJson.children.push(namedLocationJson);
    combinedJson.children.push(overallSettingJson);
    combinedJson.children.push(parentalModeJson);
    combinedJson.children.push(publishJson);
    combinedJson.children.push(scheduledFeedItemJson);
    combinedJson.children.push(timeBlockJson);
    combinedJson.children.push(urlSettingJson);
    combinedJson.children.push(userJson);
    combinedJson.children.push(userDeviceJson);

    treeHolderDiv.innerHTML = renderTreeJson(combinedJson, "populateMessage");

    return combinedJson;
}

function populateMessage(id)
{
    messageText.scrollTop = 0;
    messageText.value = JSON.stringify(requestMessages[id], null, 5);
}

function extractMessagesFromJson(treeJson)
{
    if(treeJson.children && treeJson.children.length > 0)
    {
        let numChildren = treeJson.children.length;

        for(let i = 0; i < numChildren; i++)
        {
            extractMessagesFromJson(treeJson.children[i]);
        }
    }
    else
    {
        requestMessages.push(treeJson.message);
    }
}