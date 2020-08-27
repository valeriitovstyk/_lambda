const hello = (event) => {
    let response = {
        sessionAttributes: event.sessionAttributes,
        dialogAction: {
            type: "Close",
            fulfillmentState: "",
            message: {
                "contentType": "PlainText",
                "content": ""
            }
        }
    };
    switch(event.currentIntent.name) {
        case "AboutIntent":
            response.dialogAction.fulfillmentState = "Fulfilled";
            response.dialogAction.message.content = "Created by Nic Raboy";
            break;
        case "FullNameIntent":
            response.dialogAction.fulfillmentState = "Fulfilled";
            response.dialogAction.message = "Hello " + event.currentIntent.slots.FullName + "!";
            break;
        default:
            response.dialogAction.fulfillmentState = "Failed";
            response.dialogAction.message.content = "I don't know what you're asking...";
            break;
    }
    return response;
}
