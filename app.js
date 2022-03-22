const mongoose = require('mongoose')
const Consultas = require('./models/consultas')
const fs = require('fs');
const Palavras = require('./models/palavras');
const Tema = require('./models/tema');
const Coluna = require('./models/coluna');

mongoose.connect('');


fs.readFile('jsons/tbcoluna.json', async (err, data) => {
    let i = 0;
    if (err) throw err;
    tb = await JSON.parse(data);
    fs.readFile("jsons/tbcoluna_tema.json", async (err, data) => {
        if (err) throw err;
        tb_2 = await JSON.parse(data);
            tb[2].data.forEach(async coluna => {
                tb_2[2].data.forEach(async rel => {
                    if(coluna.id_coluna === rel.id_coluna){
                        try {
                            const colunas = new Coluna(coluna)
                            colunas.tema = rel.id_tema;
                            (coluna.status == "Ativo")? colunas.status = "A" : colunas.status = "I";
                            // await colunas.save()
                            // i++;
                            // console.log(i,coluna.id_coluna,rel.id_coluna)
                        } catch (error) {
                            console.log(error)
                        }
                        
                    }
                })
            });
    })
});


