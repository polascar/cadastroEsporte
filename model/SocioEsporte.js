const Sequelize = require('sequelize');
const connection = require('../database/database');

const SocioEsporte = connection.define('socioesporte',{
  id:{}
});

SocioEsporte.sync({force: false}).then(()=>{});

module.exports = SocioEsporte;