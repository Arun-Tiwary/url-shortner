const {Sequelize} = require("sequelize");

const createDB = new Sequelize("db1", "user1", "pass1", {
  dialect: "sqlite", // database to connect 
  host: "./config/db.sqlite"  // database file 
});

module.exports = createDB;   
