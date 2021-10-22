const Sequelize = require('sequelize');
const connection = require('../database/database');

const PagamentoMensal = connection.define('pagamentoMensal',{
  idPagamento:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  descricaoPagamento:{
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = PagamentoMensal;