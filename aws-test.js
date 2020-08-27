var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

var lexruntime = new AWS.LexRuntime();

const params = {
    botAlias: '$LATEST', /* required, has to be '$LATEST' */
    botName: 'xBot', /* required, the name of you bot */
    userId: 'USER', /* required, arbitrary identifier */
}
const postText = (text) => {
    const params = {
        botAlias: '$LATEST', /* required, has to be '$LATEST' */
        botName: 'xBot', /* required, the name of you bot */
        inputText: text, /* required, your text */
        userId: 'USER', /* required, arbitrary identifier */
        sessionAttributes: {
            someKey: 'STRING_VALUE',
            /* anotherKey: ... */
        }
    };

    return new Promise((resolve, reject) => {
        lexruntime.postText(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                console.log('data', data)
                resolve(data.message);
            }
        })
    })
}


const getSessionDetails = params =>
    new Promise((res, rej) => {
        lexruntime.getSession(params, (err, data) => {
            if (err) return rej(err)
            res(data)
            console.log(data)
        })
    })


const startSession = async params => {
    return new Promise((res, rej) => {
        lexruntime.putSession(params, (err, data) => {
            if (err) return rej(err)
            res(data)
            console.log(data)
        })
    })
}

lexruntime.getSession(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
