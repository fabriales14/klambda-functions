exports.handler =  async function(event, context) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: event.body.message,
          input: event,
        }),
    };
    return response
}