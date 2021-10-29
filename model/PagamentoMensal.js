const Sequelize = require('sequelize');
const connection = require('../database/database');

const PagamentoMensal = connection.define('pagamentoMensal',{
  descricaoPagamento:{
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = PagamentoMensal;