const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ghoniyyunputra', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '+07:00',
  logging: false
});

module.exports = sequelize; 
