exports.handler =  async function(event, context) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          input: event
        }),
    };
    return response
}