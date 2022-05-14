// Define o model utilizado pelas questões
let mongoose = require('mongoose');

let questionSchema = mongoose.Schema({
  enunciado: {
    type: String,
    required: true
  },
  codigo: {
    type: String,
    required: false
  },
  respostas: {
    type: Array,
    required: true
  },
  categoria: {
    type: String,
    required: false
  },
  disciplina: {
    type: String,
    required: false
  },
  data_criacao: {
    type: Date,
    required: false
  },
  data_alteracao: {
    type: Date,
    required: false
  },
});

let Question = module.exports = mongoose.model('question', questionSchema);

module.exports.get = (callback, limit) => {
  Question.find(callback).limit(limit);
}