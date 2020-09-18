exports.handler =  async function(event, context) {
  const requestBody = JSON.parse(event.body)
  const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: requestBody.message
      }),
  };
  return response
}