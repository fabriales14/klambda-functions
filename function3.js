exports.handler = (event, context, callback) => { 
    // Close the support case       
    var myCaseID = event.Case;    
    var myMessage = event.Message + "closed.";    
    var result = {Case: myCaseID, Message: myMessage};
    callback(null, result);
};
