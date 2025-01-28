const express = require('express');
const api = require("./api/operacoes");
const cors = require('cors');
const app = express();
const porta = 9090;

app.use(cors());
app.use(express.json());

app.post("/alunos", api.apiNotas);

app.listen(porta, () => {
    console.log("Servidor Rodando na porta " + porta);
})