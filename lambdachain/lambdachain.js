var AWS = require('aws-sdk');
var lambda = new AWS.Lambda({
    region: 'us-west-1'
});
var lambdachain = process.env.listLambdas.split(' ');
var output;

exports.handler = function(event, context, callback) {
    const main = async () => {
        output = await (lambda.invoke({
            FunctionName: lambdachain[0], 
            Payload: JSON.stringify(event),
        }).promise());
    
        for (var x=1; x<lambdachain.length; x++){
            output = await (lambda.invoke({
                FunctionName: lambdachain[x], 
                Payload: output.Payload,
            }).promise());
        }
        console.log(output);
    };
    main().catch(error => console.error(error));
    callback(null, output);
};