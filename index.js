const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const CadastroSocios = require('./model/CadastroSocios');
const Pagamento = require('./model/PagamentoMensal');

//database
connection
	.authenticate()
		.then(() => 
				{console.log("Conexão feita com o banco de dados!");
					})
		.catch((msgErro)=>{ throw msgErro;
}) 

//express => use EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get("/", (req, res) => {
  CadastroSocios.findAll({raw: true, order: [
    ['id','desc'] //DESC = Decrescente e ASC = Crescente
  ]}).then(cadastros => {
    res.render("index",{
      cadastros: cadastros
    });
  })
});

app.get("/cadastrar", (req, res) => {
	res.render("inicialClube");
});

app.post("/salvarCadastro", (req, res) => {

	var nome = req.body.nome;
  var sobrenome = req.body.sobrenome;
  var dtNasc = req.body.dtNasc;
  var email = req.body.email;
  var telefone = req.body.telefone;
  var endereco = req.body.endereco;

  cadastroModel.create({
			nome: nome,
      sobrenome: sobrenome,
      dtNasc: dtNasc,
      email: email,
      telefone: telefone,
      endereco: endereco,
		}).then(() => {res.redirect("/")});

});

app.post("/salvarPagamento", (req, res) => {

	var descricaoPagamento = req.body.descricaoPagamento;

  Pagamento.create({
    descricaoPagamento: descricaoPagamento,
		}).then(() => {res.redirect("/")});

});

app.listen(8081, () => console.log('No ar!'));
