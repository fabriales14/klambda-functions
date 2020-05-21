var mysql = require('mysql');
var query_str;

var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.db
});

exports.handler = (event, context, callback) => {
    query_str = "CALL " + process.env.spName + "(?,?);";
    connection.query(query_str, 
        [event.body.name, event.body.lastName], 
        function (error, results, fields) {
        if (error) {
            console.log("error");
            connection.destroy();
            throw error;
        } else {
            // connected!
            console.log(results);
            callback(null, results);
            //connection.end(function (err) { callback(err, results);});
            }
        });
}



