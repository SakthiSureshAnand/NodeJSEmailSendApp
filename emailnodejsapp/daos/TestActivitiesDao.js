var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/TestActivities_SQL.properties');
module.exports.create_TestNoun = function(TestNoun,callback) {
  console.log('inside the dao layer before sequelize')
  var create_query = sqlQuery._properties.create_TestNoun;
  sequelize.query(create_query, {
    replacements: {
    	persona : TestNoun.persona,
    	personb : TestNoun.personb,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.TestNoun
  }).then(function(testnoun) {
    console.log('Inside then method in sequelize');
		callback(testnoun);
	});
};

// get the data getall test noun
module.exports.getall_testnoun = function(cntrlServce){
  //select * from TestNoun
  var getAlltesnoun = "SELECT * FROM geppetto.new_users where processed = 'requested'";
  //var getAlltesnoun =  "SELECT * FROM nodedebugproj.testnoun where notAllocate like 'f'";
  sequelize.query(getAlltesnoun,{
    type : sequelize.QueryTypes.SELECT,
    model: models.TestNoun
  }).then(function(getallteN){
    console.log('getallteN data =>',getallteN);
    cntrlServce(getallteN);
  });
};


// update the f to t coding 
module.exports.updateAll_testNoun_colmn = function(data,cnteServ){
  console.log('update the f to t',JSON.stringify(data));
  var dataLength = JSON.stringify(data);
  // array of "f" data length
  console.log('length of data =>',data.length);
   var update_query = sqlQuery._properties.update_TestNoun;
   // upadte the false in to trur in to the same table below 
   // for loop execute it ,,,,,
  for(var i=0;i<data.length;i++){
        console.log('for first iteration ',i);
        //data[i].dataValues.processed
        var notAllocateD = data[i].dataValues.processed;
        if(notAllocateD === "requested"){
        console.log('notAllocate data =>',notAllocateD);
        var idD = data[i].dataValues.id;
     // update value finished change to processing
        var changeToT = "processing"; 
       // for adding the inital default value In to the column in new_users table 
        var unlockvalue = "unlock";
        // As well as we need to add the one more column value in new_users table isEditable
        var is_Editable  =  "false";
        console.log('id data to upadete value',idD)
        // store the value of type column In default of new_users
        var type = "OPEN";
       // var updateQ = "update nodedebugproj.testnoun set notAllocate="+changeToT+" where id="+idD+"";
        sequelize.query(update_query, {
        replacements: {
        id:idD,
        notAllocate : changeToT,
        un_lock_value : unlockvalue,
        isEditable : is_Editable,
        type :type
        },    type : sequelize.QueryTypes.UPDATE,
    model: models.TestNoun
  }).then(function() {
    console.log('Inside then method in sequelize');
    cnteServ("updated");
  });     
        } 
  }
};


