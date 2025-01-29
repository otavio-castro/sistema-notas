# Sistema de Gerenciamento de Notas de Alunos

## Descrição
Este sistema permite gerenciar notas e frequências de alunos, calculando médias e identificando alunos com desempenho acima ou abaixo dos critérios estabelecidos. Ele é composto por um back-end desenvolvido em Node.js e um front-end em React, utilizando Vite como ferramenta de desenvolvimento.

O front-end está hospedado no seguinte link: [Sistema de Notas](https://otavio-castro.github.io/sistema-notas/). 
> **Nota:** Para que o front-end funcione corretamente, o back-end deve estar rodando localmente conforme está descrito na seção 1. Configuração do Back-end.

## Tecnologias Utilizadas
- **Back-end:** Node.js, Express
- **Front-end:** React, Vite, Axios
- **Outras Dependências:** Bootstrap (para estilização)

## Instruções para Executar o Sistema

### 1. Configuração do Back-end (Obrigatório)

1. Certifique-se de ter o [Node.js](https://nodejs.org/pt) instalado.
   
3. Clone este repositório:
   ```sh
   git clone https://github.com/otavio-castro/sistema-notas.git
   ```
4. Acesse a pasta backend:
   ```sh
   cd sistema-notas/backend
   ```
4. Instale as dependências:
   ```sh
   npm install
   ```
5. Inicie o servidor:
   ```sh
   node --watch index.js
   ```
   O servidor estará rodando em `http://localhost:9090/alunos`.

### 2. Executando o Front-end

Caso prefira acessar o front-end diretamente, ele está hospedado em:
[https://otavio-castro.github.io/sistema-notas/](https://otavio-castro.github.io/sistema-notas/)

> **Nota:** Para que o front-end funcione corretamente, o back-end deve estar rodando localmente conforme descrito acima.

### 3. Configuração Local do Front-end (Opcional)

1. Navegue até a pasta do front-end:
   ```sh
   cd ../frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
   O front-end estará acessível em `http://localhost:5173/` (ou outra porta definida pelo Vite).

## Premissas Assumidas
- O sistema recebe dados de alunos via API no formato JSON.
- As notas dos alunos são valores numéricos entre 0 e 10.
- A frequência é representada como uma porcentagem (0 a 100%).

## Decisões de Projeto
- **Vite como ferramenta de desenvolvimento**: Escolhido para um ambiente rápido e eficiente no desenvolvimento do front-end.
- **Axios para requisições HTTP**: Facilidade na comunicação com a API.
- **Node.js com Express**: Simplicidade na criação do back-end.
- **Modularização do código**: Separando lógicas de back-end e front-end para facilitar a manutenção e expansão do projeto.

## Contato

Caso queira entrar em contato comigo envie uma mensagem para o email [otavionascimento1514@gmail.com].
