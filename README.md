# nodejs-19mob

# PROJETO FINAL - NODE.JS - 19MOB
## GRUPO 3
### FABIO ASNIS - RM: 335694
### FILIPE CUNHA - RM: 335525
### GABRIEL PIVA - RM: 335499
### GUILHERME CUNHA - RM: 335526

O projeto foi hospedado no ambiente do Heroku, usando a conexão com o Firebase para o armazenamento dos dados.

Dessa forma, visando a utilização das APIs, primeiro precisamos realizar o cadastro de um usuário, o qual será
usado em seguida para autenticação (criação de token) e posterior acesso às demais funcionalidades disponíveis.

Logo, siga os passos abaixo para efetuar as operações de CRUD:

Obs.: Não colocamos a obrigatoriedade do token apenas na criação do usuário, visto que este necessita se cadastrar
primeiro no sistema.

## Users
1. Cadastro de um usuário -> Para efetuar o cadastro de um novo usuário,
faça uma requisição HTTP POST para a URI <https://react-nodejs-19mob.herokuapp.com/users/>,
passando no body da requisição um objeto JSON no seguinte padrão:

{
"email": "teste@gmail.com",
"password": "123456",
"name": "Teste"
}


Logo, o ID do usuário criado será retornado junto com os dados utilizados

{
"email": "teste@gmail.com",
"name": "Teste",
"id": "jnr7w3Nc8sMyskF1zIEv"
}


2. Gerar token de autenticação -> Utilize os valores de “email” e “password” passados no item
anterior para realizar a autenticação, recebendo um token JWT válido. Para isso, faça uma requisição
HTTP POST para a URI <https://react-nodejs-19mob.herokuapp.com/users/auth/>, passando no body da requisição um
objeto JSON conforme exemplo abaixo:

{
"email": "teste@gmail.com",
"password": "123456"
}



Dessa forma, um token válido será retornado, o qual terá prazo de expiração de 12 horas.

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3aU9EQjZYRkRXVjBBZFFnend0IiwiaWF0IjoxNTkwMzY3NzYwLCJleHAiOjE1OTA0MTA5NjB9.stfntpcLtkZBY8cmvbzaFm1pxX7BKDFbSx9QQU5HyAA"
}


3. Consultar usuário pelo ID -> Faça uma requisição GET para a URI https://react-nodejs-19mob.herokuapp.com/users/:id,
onde o parâmetro :id será passado o valor do ID correspondente ao usuário recém cadastrado, como por exemplo:
https://react-nodejs-19mob.herokuapp.com/users/jnr7w3Nc8sMyskF1zIEv e no Header da requisição, um cabeçalho “x-access-token”
com o valor “eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3aU9EQjZYRkRXVjBBZFFnend0IiwiaWF0IjoxNTkwMzY3NzYwLCJleHAiOjE1OTA0MTA5NjB9.stfntpcLtkZBY8cmvbzaFm1pxX7BKDFbSx9QQU5HyAA”

O objeto JSON com os dados do usuário deverão ser devidamente retornados, como exemplo abaixo:

{
"email": "teste@gmail.com",
"password": "6ddd2acb2b28075435746f34c1dbddecf2c2056c2b52b1c9c9a7f128646e257e0368dc810caba30ee7eba1d40629af2fdc1cc100de352fcbe8df7a25ae8fc0bf",
"name": "Teste"
}


4. Excluir o usuário -> Faça uma requisição DELETE para a URI https://react-nodejs-19mob.herokuapp.com/users/:id, onde o parâmetro :id será passado
o valor do ID correspondente ao usuário recém cadastrado, como por exemplo: https://react-nodejs-19mob.herokuapp.com/users/jnr7w3Nc8sMyskF1zIEv e no
Header da requisição, um cabeçalho “x-access-token” com o valor “eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3aU9EQjZYRkRXVjBBZFFnend0IiwiaWF0IjoxNTkwMzY3NzYwLCJleHAiOjE1OTA0MTA5NjB9.stfntpcLtkZBY8cmvbzaFm1pxX7BKDFbSx9QQU5HyAA”

Uma mensagem deverá ser retornada, informando que o objeto com o respectivo “ID” foi excluído.

Usuário de id jnr7w3Nc8sMyskF1zIEv removido com sucesso!



## CARS

1. Cadastrando um carro -> Utilizar o token gerado anteriormente para
autenticacao. Faça uma requisição POST para a URI https://react-nodejs-19mob.herokuapp.com/cars/,
no Header da requisição, um cabeçalho “x-access-token” com o valor “eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3aU9EQjZYRkRXVjBBZFF
nend0IiwiaWF0IjoxNTkwMzY3NzYwLCJleHAiOjE1OTA0MTA5NjB9.stfntpcLtkZBY8cmv
bzaFm1pxX7BKDFbSx9QQU5HyAA” passando no body da requisição um objeto
JSON conforme exemplo abaixo:
{
"manufacturer":"Fiat",
"model": "Palio",
"color": "Cinza"
}
O objeto JSON com os dados do carro deverão ser devidamente retornados, como exemplo abaixo:
{
"manufacturer": "Fiat",
"model": "Palio",
"color": "Cinza",
"id": "pLbaPJScHEBMVXOD5NWL"
}


2. Consultar um carro pelo ID -> Faça uma requisição GET para a URI <https://react-nodejs-19mob.herokuapp.com/cars/:id>,
onde o parâmetro :id será passado o valor do ID correspondente ao carro recém cadastrado, como por exemplo:
https://react-nodejs-19mob.herokuapp.com/cars/pLbaPJScHEBMVXOD5NWL e no Header da requisição, um cabeçalho “x-access-token”
com o valor “eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3aU9EQjZYRkRXVjBBZFFnend0IiwiaWF0IjoxNTkwMzY3NzYwLCJleHAiOjE1OTA0MTA5NjB9
.stfntpcLtkZBY8cmvbzaFm1pxX7BKDFbSx9QQU5HyAA”

O objeto JSON com os dados do carro deverão ser devidamente retornados, como exemplo abaixo:

{
"model": "Palio",
"color": "Cinza",
"manufacturer": "Fiat"
}


3. Excluir o carro -> Faça uma requisição DELETE para a URI <https://react-nodejs-19mob.herokuapp.com/cars/:id>, onde o parâmetro :id será passado
o valor do ID correspondente ao carro recém cadastrado,
como por exemplo: https://react-nodejs-19mob.herokuapp.com/cars/pLbaPJScHEBMVXOD5NWL e no
Header da requisição, um cabeçalho “x-access-token” com o valor “eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3aU9EQjZYRkRXVjBBZFFnend0IiwiaWF0IjoxNTkwMzY3NzYwLCJleHAiOjE1OTA0MTA5NjB9.stfntpcLtkZBY8cmvbzaFm1pxX7BKDFbSx9QQU5HyAA”
Uma mensagem deverá ser retornada, informando que o objeto com o respectivo “ID” foi excluído.

Carro de id pLbaPJScHEBMVXOD5NWL removido com sucesso!



## TESTES



1. Para executar os testes unitários, abra o projeto pela IDE e em seguida, numa nova janela de terminal, execute os seguintes comandos:

2. Para instalar as dependências node -> npm i

3. Para executar o teste -> npm run test