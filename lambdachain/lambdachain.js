var AWS = require('aws-sdk'); // sdk de aws para invocación de Lambdas
var lambda = new AWS.Lambda({
    region: process.env.region // configuración de región
});
var lambdachain = process.env.listLambdas.split(' '); // obtención de lista de funciones a invocar
var output; // datos para retornar al final del proceso

exports.handler = function(event, context, callback) {
    const main = async () => { // invocación asíncrona de primera función
        output = await (lambda.invoke({
            FunctionName: lambdachain[0], 
            Payload: JSON.stringify(event),
        }).promise());
        
        for (var x=1; x<lambdachain.length; x++){ // ciclo de ejecución
            output = await (lambda.invoke({ // input es el output de última llamada
                FunctionName: lambdachain[x], 
                Payload: output.Payload,
            }).promise());
        }
    };
    main().catch(error => console.error(error)); // retorno en caso de error
    callback(null, output); // devuelve el resultado construído
};