const calculaMedia = (alunos) => {
    const mediasAlunos = [];
    const mediasDisciplinas = [0, 0, 0, 0, 0];
    const frequencias = [];
    const alunosAbaixoDaFrequencia = [];
    const alunosAcimaDaMedia = [];

    alunos.forEach((aluno) => {
        let somaAluno = 0;

        aluno.notas.forEach((nota, index) => {
            somaAluno += nota;
            mediasDisciplinas[index] += nota;
        });

        const mediaAluno = somaAluno / aluno.notas.length;
        mediasAlunos.push({
            nome: aluno.nome,
            media: aluno.notas,
            frequencia: aluno.frequencia
        });

        if (aluno.frequencia < 75) {
            alunosAbaixoDaFrequencia.push(aluno.nome);
        }

        frequencias.push({
            nome: aluno.nome,
            frequencia: aluno.frequencia,
            status_atencao_frequencia: aluno.frequencia < 75 ? "abaixo" : "ok"
        });
    });
    if (alunosAbaixoDaFrequencia.length === 0) {
        alunosAbaixoDaFrequencia.push('');
    }

    mediasDisciplinas.forEach((total, index) => {
        mediasDisciplinas[index] = parseFloat((total / alunos.length).toFixed(2));
    });

    // Encontrando alunos acima da média nas disciplinas
    alunos.forEach((aluno) => {
        let todasAcimaDaMedia = true;

        mediasDisciplinas.forEach((mediaDisciplina, index) => {
            if (aluno.notas[index] <= mediaDisciplina) {
                todasAcimaDaMedia = false;
            }
        });

        if (todasAcimaDaMedia) {
            alunosAcimaDaMedia.push(aluno.nome);
        }
    });
    if (alunosAcimaDaMedia.length === 0) {
        alunosAcimaDaMedia.push('');
    }

    return {
        mediasAlunos,
        mediasDisciplinas,
        frequencias,
        alunosAcimaDaMedia,
        alunosAbaixoDaFrequencia
    };
};

module.exports = {
    calculaMedia
}