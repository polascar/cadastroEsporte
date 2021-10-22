const Sequelize = require('sequelize');
const connection = require('../database/database');
const Pagamento = require('./PagamentoMensal');

const CadastroSocios = connection.define('cadastrosocios',{
  nome:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  sobrenome:{
    type: Sequelize.TEXT,
    allowNull: false
  }, 
  dtNasc:{
    type: Sequelize.TEXT,
    allowNull: false
  }, 
  email:{
    type: Sequelize.TEXT, 
    allowNull: false
  }, 
  telefone:{
    type: Sequelize.TEXT,
    allowNull: false
  }, 
  endereco:{
    type: Sequelize.TEXT, 
    allowNull: false 
  }
});

CadastroSocios.sync({force: false}).then(()=>{});

module.exports = CadastroSocios;
