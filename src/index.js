// Chama as dependências
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
let apiRoutes = require("./routes/apiRoutes")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conecta ao banco
mongoose.connect('mongodb://localhost/rocketz');
var db = mongoose.connection;

app.get('/', (req, res) => res.send('ROCKETZ QUESTIONS DIGITAL - LEONARDO LACERDA'));

app.use('/rocketz', apiRoutes)

// Define a porta do servidor
app.listen(3000);