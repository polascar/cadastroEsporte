const Sequelize = require('sequelize');

const connection = new Sequelize('cadastroesporte', 'root', '1997Scar1987*',{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;