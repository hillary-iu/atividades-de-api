import coleçãodeLoja from "./listas/lojas";
import express from "express"

const app  = express();

app.get('/ufs'(req, res) =>{
    res.json(coleçãodeLoja);
});