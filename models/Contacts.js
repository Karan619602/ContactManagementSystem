const { DataTypes } = require('sequelize');
const sequelize = require('./config');
const User = require('./User');

const Contacts = sequelize.define('Contacts', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      PhoneNo: {
        type: DataTypes.STRING,
        allowNull: false
        
      }
  });
  
  module.exports = Contacts;