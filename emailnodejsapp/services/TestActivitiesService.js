var dao = require("../daos/TestActivitiesDao")
module.exports.create_TestNoun = function(TestNoun,callback) {
	console.log('Inside the Services TestNoun data =>',TestNoun);
	function serviceCallBack(testnoun){
  	console.log('inside Services callback method',testnoun);
    callback(testnoun);
  };
  dao.create_TestNoun(TestNoun,serviceCallBack);
};


// Get the data testnoun
module.exports.getAll_testnoun = function(callbackFrmCntrl){
	//getall_testnoun
	function fromCntrlService(dataFrmDao){
		console.log('coming bck f in db time');
		console.log('services coming  from dao once f comes',JSON.stringify(dataFrmDao));
		callbackFrmCntrl(dataFrmDao);
	};
	dao.getall_testnoun(fromCntrlService);
};

module.exports.updateAllocate_Cloumn  = function(dat,insidecallbackFrmCtrl){
	console.log('back callback');

	function fromServiceDao(returnData){
		console.log('coming from back of updated ajax call ')
		insidecallbackFrmCtrl(returnData);
	}

	dao.updateAll_testNoun_colmn(dat,fromServiceDao);
};