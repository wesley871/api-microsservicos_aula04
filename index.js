import express from "express";

const app = express();

function documentacao(req, res){

}

app.get("/", documentacao);

app.listen(3000);