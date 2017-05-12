'use strict';

module.exports = function(sequelize, DataTypes) {
  var TestNoun = sequelize.define("TestNoun", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    persona: DataTypes.STRING,
    personb: DataTypes.STRING,
    notAllocate: DataTypes.STRING
  });
  return TestNoun;
};