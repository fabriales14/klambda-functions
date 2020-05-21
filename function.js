var mysql = require('mysql');
var config = require('./config.json');

var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.db
});

    connection.query('select * from person', function (error, results, fields) {
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
    //var myCaseID = event.inputCaseID;
    //var myMessage = "Case " + myCaseID + ": opened...";   
    //var result = {Case: myCaseID, Message: myMessage};
    //callback(null, result); 
    connection.end();

