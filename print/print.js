exports.handler =  async function(event, context) {
    const response = {
        statusCode: 200,
        message: event.body.message,
        input: event
    };
    return response
}