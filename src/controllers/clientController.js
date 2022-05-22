Client = require('../models/clientModel');
const https = require('https');

// Retorna lista de clientes
exports.list = (req, res) => {
  Client.get((err, clients) => {
    if (err) {
      return res.json({
        status: "error",
        message: err,
      });
    }

    return res.json({
      status: 'Ok',
      message: 'A lista de clientes foi carregada.',
      data: clients
    });
  });
};

// Cria um novo cliente
exports.new = (req, res) => {
  let new_client = new Client(req.body);
  new_client.save((err, client) => {
    if (err) {
      return res.send(err);
    }

    return res.json(client);
  });
};

// Localiza e retorna o cliente pelo ID
exports.byId = (req, res) => {
  Client.findById(req.params.id, (err, client) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      status: 'OK',
      message: 'Carregando detalhes do cliente solicitada.',
      data: client
    });
  });
};


// Deleta o cliente pelo ID
exports.delete = (req, res) => {
  Client.remove({
    _id: req.params.id
  }, (err, client) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      status: 'OK',
      message: 'Cliente deletado do banco de dados.'
    });
  });
};

// Localiza o cliente pelo nome
exports.search = (req, res) => {
  Client.findOne({
    name: req.params.search
  }, (err, client) => {
    if (err) {
      return res.send(err);
    }
    res.json({
      status: 'OK',
      message: 'Carregando detalhes do cliente solicitado.',
      data: client
    });
  });
};