var mysql = require('mysql');
var query_str;

var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.db
});

exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false; // never waits for connection to be closed, so it can be reused
    query_str = "CALL " + process.env.spName + "(?,?);";
    let body = JSON.parse(event.body);
    connection.query(query_str, 
        [body.name, body.lastName], 
        function (error, results, fields) {
        if (error) {
            console.log("error");
            connection.destroy();
            var response = {
                statusCode: 400,
                body: JSON.stringify("Error adding on database")
            };
            callback(null, response);
        } else {
            var response = {
                statusCode: 200,
                body: JSON.stringify("Item added succesfully")
            };
            callback(null, response);
        }
    });
}
