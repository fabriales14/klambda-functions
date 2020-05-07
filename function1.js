var mysql = require('mysql');
var config = require('./config.json');

var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.db
});

exports.handler = (event, context, callback) => { 
    connection.query('show tables', function (error, results, fields) {
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



