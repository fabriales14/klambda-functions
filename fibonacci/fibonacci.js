function fib(n) {
    if(n > 1){
        return fib(n-1) + fib(n-2)
    } else {
        return n;
    }
}

exports.handler =  async function(event, context) {
    let number = event.pathParameters.number; 
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          result: number
        }),
    };
    return response
}