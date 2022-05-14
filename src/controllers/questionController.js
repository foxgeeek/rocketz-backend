Question = require('../models/questionModel');
const https = require('https');

// Retorna lista de planetas
exports.index = (req, res) => {
  Question.get((err, questions) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "Sucesso",
      message: "A lista de questões foi carregada.",
      data: questions
    });
  });
};

// Cria uma nova questão
exports.new = (req, res) => {
  let new_question = new Question(req.body);
  new_question.save((err, new_question) => {
    if (err)
      res.send(err);
    res.json(new_question);
  });
};

// Localiza a questão pelo ID
exports.view = (req, res) => {
  Question.findById(req.params.question_id, (err, question) => {
    if (err)
      res.send(err);
    res.json({
      message: 'Carregando detalhes da questão solicitado.',
      data: question
    });
  });
};


// Deleta a questão pelo ID
exports.delete = (req, res) => {
  Question.remove({
    _id: req.params.question_id
  }, (err, question) => {
    if (err)
      res.send(err);
    res.json({
      status: "Sucesso",
      message: 'Questão deletada do banco de dados.'
    });
  });
};

// Localiza a questão pelo enunciado ou palavra
exports.v = (req, res) => {
  Question.findOne({
    nome: req.params.enunciado
  }, (err, question) => {
    if (err) {
      return res.send(err);
    }
    res.json({
      message: 'Carregando detalhes da questão solicitada.',
      data: question
    });
  });
};