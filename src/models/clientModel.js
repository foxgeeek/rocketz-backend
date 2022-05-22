// Define o model utilizado pelas questões
let mongoose = require('mongoose');

let clientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  password: {
    type: Array,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
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

let Client = module.exports = mongoose.model('client', clientSchema);

module.exports.get = (callback, limit) => {
  Client.find(callback).limit(limit);
}