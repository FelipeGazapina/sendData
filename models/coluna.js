const mongoose = require('mongoose');
const validator = require('validator')

const colunaSchema = mongoose.Schema({
    titulo:{
        type: String,
    },
    numero:{
        type: Number,
    },
    texto:{
        type: String,
    },
    data:{
        type: Date,
    },
    tema: {
        type:Number,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Tema'
    },
    edicao:{
        type: Number,
    },
    pdf:{
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

const Coluna = mongoose.model('Coluna', colunaSchema)

module.exports = Coluna