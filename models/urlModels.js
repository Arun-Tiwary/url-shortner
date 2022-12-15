const { Model, DataTypes } = require("sequelize");
const sequelize  = require('../config/db');


//creating schema
class Url extends Model { }  // class Url will have all the propeties of Models


//creating table using Models
Url.init(
  { // init is   Model object 
  longUrl: {
    type:  DataTypes.STRING,
    allowNull: false
    },
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }       
  },
  { sequelize, modelName: "Url"}   // parameter requires by init      
);

module.exports = Url ;