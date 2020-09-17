exports.handler =  async function(event, context) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: event.body.message
        }),
    };
    return response
}