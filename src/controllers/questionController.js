Question = require('../models/questionModel');
const https = require('https');

// Retorna lista de questão
exports.list = (req, res) => {
  Question.get((err, questions) => {
    if (err) {
      return res.json({
        status: "error",
        message: err,
      });
    }

    return res.json({
      status: 'Ok',
      message: 'A lista de questões foi carregada.',
      data: questions
    });
  });
};

// Cria uma nova questão
exports.new = (req, res) => {
  let new_question = new Question(req.body);
  new_question.save((err, question) => {
    if (err) {
      return res.send(err);
    }

    return res.json(question);
  });
};

// Localiza a questão pelo ID
exports.byId = (req, res) => {
  Question.findById(req.params.id, (err, question) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      status: 'OK',
      message: 'Carregando detalhes da questão solicitada.',
      data: question
    });
  });
};


// Deleta a questão pelo ID
exports.delete = (req, res) => {
  Question.remove({
    _id: req.params.id
  }, (err, question) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      status: 'OK',
      message: 'Questão deletada do banco de dados.'
    });
  });
};

// Localiza a questão pelo enunciado ou palavra
exports.search = (req, res) => {
  Question.findOne({
    enunciado: req.params.search
  }, (err, question) => {
    if (err) {
      return res.send(err);
    }
    res.json({
      status: 'OK',
      message: 'Carregando detalhes da questão solicitada.',
      data: question
    });
  });
};