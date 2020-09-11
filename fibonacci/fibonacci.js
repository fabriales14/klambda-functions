exports.handler = (event, context, callback) => {    
    // Assign the support case and update the status message
    let number = event.pathParameters.number;    
    var result = fib(number);
    callback(null, result);        
};

function fib(n) {
    if(n > 1){
        return fib(n-1) + fib(n-2)
    } else {
        return n;
    }
}