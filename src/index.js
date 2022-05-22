// Chama as dependências
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let swaggerUI = require('swagger-ui-express');
let swaggerDocument = require('./../swagger.json');

let config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER,
}

let app = express();
let apiRoutes = require("./routes/apiRoutes")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conecta ao banco
mongoose.connect('mongodb://localhost/rocketz');
var db = mongoose.connection;

app.get('/', (req, res) => res.send('ROCKETZ QUESTIONS DIGITAL - LEONARDO LACERDA'));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api', apiRoutes)

// Define a porta do servidor
app.listen(3000);