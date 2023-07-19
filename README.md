# backEnd-labedit


O Projeto Labeddit é uma API de posts que permite aos usuários criar uma conta ou fazer login para criar posts, curtir e comentar. O objetivo do projeto é fornecer uma base para o desenvolvimento do front-end, que é implementado no programa. Para mais informações, consulte o anexo: clique aqui!

Os principais tópicos abordados neste projeto são:

Conceito de TypeScript.
Criação de uma API.
Implementação dos métodos principais: get, post, put e delete.
Arquitetura em camadas.
Programação Orientada a Objeto.
Autenticação.


Link de Acesso
Documentação: https://documenter.getpostman.com/view/26404474/2s946iaqXD.
Concepção do Projeto
Instalação
bash
Copy code

# Instalando as dependências
npm install

# Executando o projeto
npm run dev e npm run start.

Funcionalidades
bash
Copy code
- Requisições:
  - SignUp: cria um usuário na API usando o método post.
  - Login: realiza o login do usuário na API usando o método post.

  - GetPosts: recupera todos os posts da API, desde que seja fornecido o token gerado no login ou signup, usando o método get.
  - GetPostById: recupera um post com o ID fornecido, desde que seja fornecido o token gerado no login ou signup, usando o método get.
  - CreatePost: cria um novo post na API, desde que seja fornecido o token gerado no login ou signup, usando o método post.
  - CreateComment: cria um novo comentário na API, desde que seja fornecido o token gerado no login ou signup, usando o método post.

  - LikeOrDislikePost: permite curtir ou descurtir um post na API, desde que seja fornecido o token gerado no login ou signup, juntamente com o ID do post. Também é necessário fornecer "true" para curtir ou "false" para descurtir no corpo da requisição.
  - LikeOrDislikeComment: permite curtir ou descurtir um comentário na API, desde que seja fornecido o token gerado no login ou signup, juntamente com o ID do comentário. Também é necessário fornecer "true" para curtir ou "false" para descurtir no corpo da requisição.

Bibliotecas Utilizadas
bash
Copy code

# Dependências:
bcryptjs,
cors,
dotenv,
express,
jsonwebtoken,
knex,
sqlite3,
uuid,
zod

# Dependências de desenvolvimento:
@types/bcryptjs,
@types/cors,
@types/express,
@types/jsonwebtoken,
@types/knex,
@types/node,
@types/uuid,
ts-node-dev,
typescript

Programas utilizados:

VSCode
PostMan

Tecnologias

TypesScript
Express
Git
