const sequelize = require('./config');
const Contacts= require('./Contacts');
const User = require('./User');

// Define associations between models here
// ...

// Synchronize the database with the models
User.hasMany(Contacts);
Contacts.belongsTo(User);
sequelize.sync({ alter:true})
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
  });


module.exports = {
  User,
  Contacts
};
