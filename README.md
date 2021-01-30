<h1 align="center">
    <br>
    Desafio Plific
    <br>
</h1>

<h4 align="center">
  Repositório para guiar no Desafio Plific para novos desenvolvedores 
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/plific/plific-desafio.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/plific/plific-desafio.svg">

  <a href="https://www.codacy.com/app/plific/plific-desafio?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=plific/plific-desafio&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://api.codacy.com/project/badge/Grade/691b85e51bf240b997ae6ff82ea41590">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/plific/plific-desafio.svg">
  <a href="https://github.com/plific/plific-desafio/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/plific/plific-desafio.svg">
  </a>

  <a href="https://github.com/plific/plific-desafio/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/plific/plific-desafio.svg">
  </a>

  <a href="https://github.com/plific/plific-desafio/blob/master/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/plific/plific-desafio.svg">
  </a>
</p>

<p align="center">
  <a href="#octocat-o-projeto">O Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-utilizar">Como utilizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## Sobre

**Olá, devs! Estaremos passando esse desafio para ver como vocês pensam e como se comportam perante a problemas complexos. Daremos 5 dias para resolução do problema. :heart:**
> Na **Plific**, focamos em trabalhar com as tecnologias mais atuais do mercado, aqui é usado:
> - Typescript
> - Node
> - React
> - React Native
> - PostgreSQL
> - Docker
> - Testes Automatizados
> - Amazon Web Services (AWS)
>
> Entre outras tecnologias para a construção da aplicação.

---

## :octocat: O Projeto

Você deverá criar uma aplicação do tipo CRUD. Deverá utilizar o PostgreSQL, Typeorm, testes automatizados para sua aplicação Back End e o React com as melhores práticas. Utilize boas práticas de programação e explore se possivel dos métodos de Clean Code. No projeto estão todas as dependências necessárias para desenvolvê-lo, você encontrará exemplos para estruturar sua aplicação e algumas instruções. 

> - Crie uma nova Branch com o código da solução e o nome da branch sendo **feat-** + o seu nome.

<h3 align="center">Aplicação Exemplo</h3>
<p align="center">
    <img src="https://arturkilldragon.files.wordpress.com/2019/08/simple-crud-app-screenshot-frontend.png" alt="plific-desafio-demo" />
</p>

---

## :rocket: Tecnologias

A solução deve ser desenvolvida com as seguintes tecnologias:

> - [Typescript](https://www.typescriptlang.org/)
> - [NodeJS](https://nodejs.org)
> - [PostgreSQL](https://www.postgresql.org/)
> - [ReactJS](https://pt-br.reactjs.org/)
> - [VS Code](https://code.visualstudio.com/) (Opcional)

## :information_source: Como utilizar

Para clonar e executar este desafio, você precisará do [Git](https://git-scm.com), [Node.js v12.18][nodejs] acima + [Yarn v1.22][yarn] acima, instalados em sua máquina, copie a url do [plific-desafio](https://github.com/plific/plific-desafio) e clone na sua máquina.

O banco deve ser criado com as seguintes credênciais: 
> - **host=** localhost
> - **port=** 5432
> - **username=** postgres
> - **password=** postgres
> - **database=** plific_desafio_database (Obrigatório)

No seu terminal:

```bash
# Clone este repositório na pasta que desejar
$ git clone https://github.com/plific/plific-desafio.git

# Entre no repositório clonado
$ cd plific-desafio

# Entre na pasta do backend da aplicação
$ cd backend

# Instale as dependências do backend
$ yarn

# Execute os testes para verificar se o projeto está ok em sua máquina
$ yarn test

# Execute a aplicação logo após
$ yarn dev:server

# Entre na pasta do frontend da aplicação
$ cd frontend

# Instale as dependências do React
$ yarn

# Execute a aplicação
$ yarn start
```

## :memo: Licença

Este projeto está sob o MIT license. Veja a [LICENSE](https://github.com/plific/plific-desafio/blob/master/LICENSE) para mais informações.

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
