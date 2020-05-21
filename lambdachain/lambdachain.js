var AWS = require('aws-sdk');
var lambda = new AWS.Lambda();
var lambdachain = process.env.listLambdas.split(' ');
var output;

function invokeLambda(pName, pInput) {
    lambda.invoke({
        FunctionName: pName, // the lambda function we are going to invoke
        Payload: JSON.stringify(pInput, null, 2)
    }, function(err, data) {
        if (err) {
            context.fail(err);
        } else {
            return data.Payload;
        }
    })
}

exports.handler = function(event, context) {
    output = invokeLambda(lambdachain[0], event);
    for (var x=1; x<lambdachain.length; x++){
        output = invokeLambda(lambdachain[x], output);
    }
    callback(null, output);
};