# REST API em Node.js e Express.js - Cadastro e manipulação de respostas e questões do projeto Rocketz

Nesta aplicação foram implementadas as seguintes fucionalidades: adicionar, listar, remover, buscar por título e id questões e respostas. Foi feito em Node usando a arquitetura REST.

## Tecnologias Utilizadas

- Node.js 10.13.0

- Postman 6.5.2

- MongoDB 4.0.4

## Dependências

- Express 4.16.4

- Mongoose 5.3.12

- Body-Parser 1.18.3

- Nodemon (não é pré-requisito, mas facilita o uso)

## Guia de instalação

1. É necessário clonar o repositório com o comando `git clone https://github.com/leonatercio/rocketz-backend.git`
2. Entrar no diretório do projeto com `cd backend (para windows)`
3. Instalar todas as dependências utilizando `npm install dependencies`
4. Recomendo instalar o nodemon, utilizando `npm install nodemon`
5. Após isso rodar a aplicação utilizando `nodemon src/index.js`

## Arquitetura REST

A seguir está uma configuração genérica de local host na porta 3000:

- Listagem de questões - GET: http://localhost:3000/rocketz/questions/

   . Em caso de sucesso retorna todas as questoes e suas respectivas respostas já cadastradas no banco de dados, cada questão no formato JSON, contendo enunciado, array de respostas, id, código, disciplina (id), categoria (ex.: humanas), data de criação e data de alteração.
   
- Adicionar questão - POST: http://localhost:3000/rocketz/questions/adicionar
  
  . Adiciona uma questão e suas respostas ao banco de dados, sendo necessário inserir o enunciado, disciplina (id), categoria (ex.: humanas) e respostas. O Id e o código são gerados automaticamente.
  
- Buscar questão por Id - GET: http://localhost:3000/rocketz/questions/id/{inserir-id-aqui}

  . Utiliza o Id gerado automaticamente quando a questão é adicionada ao banco de dados. Retorna o arquivo no formato JSON com sucesso caso exista. Para essa busca é necessário inserir o Id após /id/.
  
- Buscar questão por enunciado ou palavra que contenha - GET: http://localhost:3000/rocketz/questions/title/{inserir-palavra-aqui}

   . Utiliza o enunciado ou palavra que contenha da questão cadastrada, segue a mesma metodologia da busca pelo Id. Para essa busca é necessário inserir o enunciado ou palavra após /title/.
   
- Deletar uma questão por Id - DELETE: http://localhost:3000/rocketz/questions/id/delete/{inserir-id-aqui}

   . Remove a questão utilizando o Id que foi gerado automaticamente, utilizando o método DELETE. 

## Testes

Foram totalmente realizados no ambiente automatizado do Postman, onde foi criado uma collection com 5 testes, comprovando o sucesso de cada funcionalidade. O Postman é uma ferramenta extremamente útil para se testar manualmente ou automatizar os testes de qualquer API REST.

## Créditos

Essa API foi desenvolvida e documentada por Leonardo Lacerda (Rocketz Media).
