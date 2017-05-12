var service = require("../services/TestActivitiesService")

// for separately added email
var EmailTemplates = require('swig-email-templates');
var path = require('path');
var nodemailer = require('nodemailer');

// Added the email transporter 
var transport = nodemailer.createTransport({  
    host :'smtp.gmail.com',
    port :465,
    secure: true,
    auth:{
        user:'geppetto.app@gmail.com',
        pass:'Geppetto123'
    }
});


module.exports.create_TestNoun = function(req, res) {
  var TestNoun = req.body;
  console.log('TestNoun data in controller =>',TestNoun);

  function cntrlCallback(data){
  	console.log('coming from controller cntrlCallback');
  	res.json(data);
    res.status(201);
    
  };

  service.create_TestNoun(TestNoun,cntrlCallback);
};

// Testing the getAll test noun 
//req,res
module.exports.getAll_testnoun = function(/*req,res*/){
	//console.log('inside the get all test noun',req.body);


/*function someLoop() {*/
  /*while(true){*/
    console.log('Ites coming only one mint after')
    //var nextExecutionTime = 2000;
    //console.log('nextExecutionTime data =>',nextExecutionTime);
    //setTimeout(service.getAll_testnoun(cntrlCallBack), nextExecutionTime);
    var myVar;
//service.getAll_testnoun(cntrlCallBack)
function myFunction() {
    myVar = setInterval(alertFunc, 60 * 1000);
}

function alertFunc() {
  //alert("Hello!");
  service.getAll_testnoun(cntrlCallBack);
  console.log('Heloopooooooooooooooooooooooooooooooooooooooooo');
}
myFunction();
/*}*/
/*}*/

/*while(true){
  console.log('******************************************************************************HI***************************************************************');
}*/


// new callback fr updte flw
function updateCntrlBck(dataFrmService){
    console.log('call back dataFrmService')
  }

//callbacktoUpdateFuncCntrl call 
/*function callbacktoUpdateFuncCntrl(data){
  //callback func
}*/

//Update flow of the f to t 
function callbacktoUpdateFunc(data,callback){
  console.log('upadate the flow');
  //
  service.updateAllocate_Cloumn(data,callback);
};

// Dummy sendEmail 
function sendEmailP(data){
  console.log('data =>',data);
};

// After upadated the requested in the new user table 
function afterUpdatedReq(/**formatted data of user details like we want id of the user**/data){
  console.log('data o f thr daya ***********',data);
}


// Send email method
function sendEmail(data){
  //console.log('data ----->>>> ',data[0].dataValues.id);
  //console.log('data processed----->>>> ',data[0].dataValues.processed);
  //console.log('data . processed ',data.processed);
  //console.log('Inside the email method',JSON.stringify(data));
  console.log('End of the  email method');
  //var newUsersFrmtdData  = JSON.stringify(data);
  //var tojsonObject = data.toJSON();
  //console.log('data to JSON()',tojsonObject);
  console.log('formated data id ');
  //console.log('newUsersFrmtdData *********************************************test ',newUsersFrmtdData.processed);
  console.log('formatted new user data',data.length);
  //console.log('formatted new user newUsersFrmtdData data',newUsersFrmtdData.length);
  // calling to service Method to send the email   
  for(var i=0 ; i<data.length; i++){
    console.log('user_id data ',data[i].dataValues.processed);
    //console.log('inside the for loop to get the email data',data[i].processed);
    //processed
    //console.log('data[i].processed above if',newUsersFrmtdData[i].processed)
    if(data[i].dataValues.processed === "requested"){
     // console.log('inside the f token only ',data[i].persona);
   // new user details capture here 
        var newuserdetailscapture  =  data[i];
        console.log('new user details if "f" condition satisifeid',JSON.stringify(newuserdetailscapture));
// send email
// create template renderer
var templates = new EmailTemplates();
/*'dhinakarintech@gmail.com',
  'bluejays5666@gmail.com'*/
var maillist = [
  'sureshanand.10decoders@gmail.com',
  'khalisaran@10decoders.in',
  'khalisaran.10decoders@gmail.com'
  ];
// provide custom rendering function
var sendPwdReminder = transport.templateSender({
    render: function(context, callback){
        templates.render('../../././../GepEmail.html', context, function (err, html, text) {
            if(err){
                console.log('coming form derr',err);
                return callback(err);
            }
            callback(null, {
                html: html,
                text: text
            });
        });
    },
    from:'geppetto.app@gmail.com'
});
sendPwdReminder({
    to: maillist,
    // EmailTemplate renders html and text but no subject so we need to
    // set it manually either here or in the defaults section of templateSender()
    subject: 'Password reminder'
}, {
    APP_URL: 'http://dev.geppettosoftware.com/geppetto_appbuilder/#/en-US/home/',
    password: '!"\'<>&some-thing'
}, function(err, info){
    if(err){
       console.log('Error',err);
    }else{
        console.log('Password reminder sent');
        
        
    }
});
// close email
    }// inside the "f" checking condition closed
  } // For loop closed
 // var listofuserids = "data";
  callbacktoUpdateFunc(data,updateCntrlBck);
};



  function cntrlCallBack(data){
    console.log('get all data from test noun ', JSON.stringify(data)); 
    //console.log('res.json',res.json(data));
    //res.send(data);

    // Here we need to add the send email flow only that table has 
    // "f" value
    // here i add the method to send the email to the flag "f" users
    sendEmail(data);
    //afterUpdatedReq("info")
//the below callbacktoUpdateFunc method perfroming the update operation "f" to
// "t" in new user table
// Below i commneted method is used to change the "f" in to "t"
    //callbacktoUpdateFunc(data,updateCntrlBck);
    
    //res.send(data);
  };

 /*while(true){ */
  console.log('astartesd')
	//service.getAll_testnoun(cntrlCallBack);	
    //res.send(data);

/*}*/// ended the while loop

};

