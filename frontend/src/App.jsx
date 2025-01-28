import React, { useState } from "react";
import axios from "axios";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [nome, setNome] = useState("");
  const [notas, setNotas] = useState(["", "", "", "", ""]);
  const [frequencia, setFrequencia] = useState("");

  const handleNotaChange = (index, value) => {
    const novasNotas = [...notas];
    novasNotas[index] = value;
    setNotas(novasNotas);
  };

  const adicionarAluno = () => {
    const notasValidas = notas.every((nota) => nota >= 0 && nota <= 10);
    const frequenciaValida = frequencia >= 0 && frequencia <= 100;

    if (nome && notas.every((n) => n !== "") && frequencia) {
      if (notasValidas && frequenciaValida) {
        setAlunos([
          ...alunos,
          { nome, notas: notas.map(Number), frequencia: Number(frequencia) },
        ]);
        setNome("");
        setNotas(["", "", "", "", ""]);
        setFrequencia("");
      } else {
        alert(
          "Por favor, insira notas entre 0 e 10 e frequência entre 0 e 100."
        );
      }
    } else {
      alert("Por favor, preencha todos os campos antes de adicionar um aluno.");
    }
  };

  const enviarDados = async () => {
    try {
      const response = await axios.post("http://localhost:9090/alunos", {
        alunos,
      });
      setResultado(response.data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Ocorreu um erro ao processar os dados. Tente novamente.");
    }
  };

  return (
    <div className="container p-4 bg-dark text-light">
      <h1 className="text-center mb-4">Gestão de Notas e Frequências</h1>

      <div className="card mb-4 p-4 bg-secondary text-light">
        <h2 className="card-title mb-3">Adicionar Aluno</h2>
        <div className="mb-3">
          <label className="form-label">Nome do aluno</label>
          <input
            type="text"
            placeholder="Nome do aluno"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Notas</label>
          <div className="row row-cols-5 g-2">
            {notas.map((nota, index) => (
              <div className="col" key={index}>
                <input
                  type="number"
                  placeholder={`Nota ${index + 1}`}
                  value={nota}
                  onChange={(e) => handleNotaChange(index, e.target.value)}
                  className="form-control"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Frequência (%)</label>
          <input
            type="number"
            placeholder="Frequência (%)"
            value={frequencia}
            onChange={(e) => setFrequencia(e.target.value)}
            className="form-control"
          />
        </div>

        <button
          onClick={adicionarAluno}
          className="btn btn-primary w-100"
          disabled={alunos.length >= 5}
        >
          Adicionar Aluno
        </button>
      </div>

      <p className="text-center text-light mb-4">
        Alunos cadastrados: {alunos.length}
      </p>

      <button onClick={enviarDados} className="btn btn-success w-100 mb-4">
        Enviar Dados para API
      </button>

      {resultado && (
        <div className="card p-4 bg-secondary text-light">
          <h2 className="card-title mb-3">Resultados</h2>

          <div className="mb-3">
            <h2 className="font-weight-bold">
              Notas e Frequencia
              <br /> (Cada Aluno):
            </h2>
            <ul>
              {resultado.mediasAlunos.map((aluno, index) => (
                <li key={index}>
                  <span style={{ marginRight: "10px" }}>{aluno.nome}</span>{" "}
                  {aluno.media.map((nota, idx) => (
                    <span key={idx} style={{ marginRight: "10px" }}>
                      {nota}
                    </span>
                  ))}
                  {aluno.frequencia}%
                </li>
              ))}
            </ul>
          </div>

          {/* Médias da Tuma*/}
          <div className="mb-3">
            <h2 className="font-weight-bold">
              Médias da Turma <br /> (Por Disciplina):
            </h2>
            <ul>
              {resultado.mediasDisciplinas.map((media, index) => (
                <li key={index}>
                  Disciplina {index + 1}: {media.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>

          {/* Alunos com Frequência Baixa */}
          <div className="mb-3">
            <h2 className="font-weight-bold">
              Alunos com Frequência baixa
              <br />
              (Abaixo de 75)
            </h2>
            <ul>
              {resultado.alunosAbaixoDaFrequencia.length > 0 ? (
                resultado.alunosAbaixoDaFrequencia.map((nome, index) => (
                  <li key={index}>{nome}</li>
                ))
              ) : (
                <li></li>
              )}
            </ul>
          </div>

          {/* Alunos Acima da Média */}
          <div className="mb-3">
            <h2 className="font-weight-bold">
              Alunos Acima da Média
              <br />
              (Todas as Discplinas):
            </h2>
            <ul>
              {resultado.alunosAcimaDaMedia.length > 0 ? (
                resultado.alunosAcimaDaMedia.map((nome, index) => (
                  <li key={index}>{nome}</li>
                ))
              ) : (
                <li></li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
