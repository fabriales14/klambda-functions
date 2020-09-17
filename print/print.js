exports.handler =  async function(event, context) {
    const response = {
        statusCode: 200,
        message: event
    };
    return response
}