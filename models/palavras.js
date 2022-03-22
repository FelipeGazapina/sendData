const mongoose = require('mongoose');
const validator = require('validator')

const palavrasSchema = mongoose.Schema({
  palavra: {
    type: String,
  },
  fonte: {
    type: String,
  },
  exemplo: {
    type: String,
  },
  exemplo2: {
    type: String,
  },
  status: {
    type: String,
    default: 'A',
    enum: ['A', 'D', 'I'],
  }
}, {
  timestamps: true
})

const Palavras = mongoose.model('Palavras', palavrasSchema)

module.exports = Palavras