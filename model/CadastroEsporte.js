const Sequelize = require('sequelize');
const connection = require('../database/database');

const CadastroEsporte = connection.define('esporte',{
  nomeEsporte:{
    type: Sequelize.TEXT,
    allowNull: false
  }
});

CadastroEsporte.sync({force: false}).then(()=>{});

module.exports = CadastroEsporte;