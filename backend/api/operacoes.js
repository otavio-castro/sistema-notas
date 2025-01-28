const mathFunctions = require("../services/operacoes");

const apiNotas = (req, res) => {
    const { alunos } = req.body;
    const { mediasAlunos, mediasDisciplinas, frequencias, alunosAcimaDaMedia, alunosAbaixoDaFrequencia } = mathFunctions.calculaMedia(alunos);

    res.json({
        mediasAlunos,
        mediasDisciplinas,
        frequencias,
        alunosAcimaDaMedia,
        alunosAbaixoDaFrequencia
    });
};

module.exports = {
    apiNotas
}

