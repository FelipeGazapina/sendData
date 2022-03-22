const mongoose = require('mongoose');
const validator = require('validator')

const consultasSchema = mongoose.Schema({
  nome: {
    type: String,
  },
  cod_cidade: {
    type: String,
  },
  id_uf: {
    type: String
  },
  pergunta: {
    type: String
  },
  resposta: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  id_pais:{
    type:Number,
  },
  numero:{
    type:Number,
  },
  data_pergunta:{
    type:Date,
  },
  data_resposta:{
    type:Date,
  },
  status_pergunta:{
    type:String,
    default: 'N',
    enum: ['P', 'N'],
  },
  status: {
    type: String,
    default: 'A',
    enum: ['A', 'D', 'I'],
  }
}, {
  timestamps: true
})

const Consultas = mongoose.model('Consultas', consultasSchema)

module.exports = Consultas