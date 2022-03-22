const mongoose = require('mongoose');
const validator = require('validator')

const temaSchema = mongoose.Schema({
  tema: {
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

const Tema = mongoose.model('Tema', temaSchema)

module.exports = Tema