var mysql = require('mysql');
var config = require('./config.json');

var query_str;

var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.db
});

exports.handler = (event, context, callback) => {
    query_str = "CALL " + event.spName + "(?,?,?);";
    connection.query(query_str, event.input, function (error, results, fields) {
        if (error) {
            console.log("error")
            connection.destroy();
            throw error;
        } else {
            // connected!
            console.log(results);
            //connection.end(function (err) { callback(err, results);});
            }
        });
    var myCaseID = event.inputCaseID;
    var myMessage = "Case " + myCaseID + ": opened...";   
    var result = {Case: myCaseID, Message: myMessage};
    connection.end();
    callback(null, result); 
}



