'use strict';

module.exports.handler = (event, context, callback) => {
  const requestBody = JSON.parse(event.body)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: requestBody.message
    }),
  };

  callback(null, response);
};