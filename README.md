<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project stack

- MongDB
- Nest

## Project setup

1. Clone repository
2. npm install
3. Nest CLI needed to continue. Install by executing `npm i -g @nestjs/cli`
4. Build up database image `docker-compose up -d`
5. Clonar el archivo __.env.template__ y renombrar a __.env__
6. Llenar las variables de entorno definidas en el ```.env```
7. Rebuild database with seed ( only on development ). Path -> http://localhost:3000/api/v1/seed
8. Levantar la aplicación mediante ```npm run start:dev```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
