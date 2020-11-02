'use strict';

function fib(n) {
    if(n > 1){
        return fib(n-1) + fib(n-2)
    } else {
        return n;
    }
}

module.exports.handler = (event, context, callback) => {
    let number = parseInt(event.pathParameters.number); 
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            result: fib(number)
        }),
    };

    callback(null, response);

};