
# To-Do
Projeto de CRUD Blog 



## Stack utilizada
NodeJS + Typescript + Prisma + Mysql + Docker



## Requisitos e Instalação

- Docker
- NPM
- Node
- Typescript

Caso não tenha NPM e Node, e não saiba como instalar siga o tutorial a seguir 
[Link](https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos)

## Instalação do projeto

```
git clone https://github.com/Luizfelipess/api-blog.git <nome-pasta>
```

Para instalar nodemon, typescript e ts-node global
```
npm i -g nodemon typescript ts-node
```

Instalando pacotes após entrar na pasta do projeto
```
npm install
```

### Iniciando o projeto
```
npm run start-dev
```

Rodar o docker 
```
docker-compose up -d
```

Conectar ao banco de dados mysql usando as credenciais que estão no docker-compose.yml
- Criar tabela **tasks**

Crie o arquivo .env, utilizando o .env.example como base, colocando credenciais do banco que esta no docker-compose.yml:
```
cp .env.example .env
```

## Documentação da API

### Endpoints
| Método | Rota | Descrição |
| -------|-------|--------- |
| GET    | /posts      | Buscar todos os Posts|
| GET    | /post/{id} | Buscar um Post especifico|
| POST   | /post | Criar um Post|
| PUT    | /posts/{id} | Editar um Post|
| DELETE | /post/{id} | Deletar um Post|

|Método | Rota | Descrição|
| ------| ------| --------|
|GET    | /users| Busca todos os usuarios|
|POST   | /user| Cria um usuario| 

Payload exemplo EM-BREVE

### Melhorias futuras
- Criação de endpoint editar e deletar um usuario
- Testes
- Login
- Autenticação
