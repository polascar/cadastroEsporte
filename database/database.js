const Sequelize = require('sequelize');

const connection = new Sequelize('cadastroesporte', 'root', 'root',{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;