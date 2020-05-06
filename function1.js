var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "database-1.cb3lrcwcl2pb.us-west-1.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "database-1",
});
// console.log(connection);
exports.handler = (event, context, callback) => {
    connection.query('show tables', function (error, results, fields) {
        if (error) {
            connection.destroy();
            throw error;
        } else {
            // connected!
            console.log(results);
            connection.end(function (err) { callback(err, results);});
        }
    });
    var myCaseID = event.inputCaseID;
    var myMessage = "Case " + myCaseID + ": opened...";   
    var result = {Case: myCaseID, Message: myMessage};
    callback(null, result); 
};
