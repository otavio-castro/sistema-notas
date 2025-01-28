import axios from "axios";

export async function postAlunos(data) {
  try {
    const response = await axios.post("http://localhost:9090/alunos", data);
    return response.data; // Retorna os dados processados pela API
  } catch (error) {
    console.error("Erro ao enviar dados para a API:", error);
    throw error;
  }
}
