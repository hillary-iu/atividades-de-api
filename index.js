import coleçãodeLoja from "./listas/lojas";
import express from "express"

const app  = express();

app.get('/loj',(req, res) =>{
    res.json(coleçãodeLoja);
});

app.get('/loj/:idloj', (req, res) => {
    const idLOJ = parseInt(req.params.idloj);
    const loj = coleçãodeLoja.find(loja => loja.id == idLOJ);
    res.json(loj);
})

app.get('//loj/idloj', (req,res) => {
    const idloj = parseInt(req.params.idloj);
    let mensagemErro = "";
    let loj;


    if(!(isNaN(idLOJ))) {
        loj = coleçãodeLoja.find(loja => loja.id === idLOJ);
        if(!uf){
            mensagemErro = "loja não encontrada"
        }
    }
});