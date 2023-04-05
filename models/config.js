const {Sequelize}= require('sequelize');


const sequelize = new Sequelize(
  process.env.database_name, 
  process.env.user_name, 
  process.env.password, {
    dialect: 'mysql',
    port: 3307,
    host: process.env.host
  });

 
  module.exports=sequelize

  