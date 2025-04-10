// import express from 'express' //npm i express

// const app = express() 
// app.use(express.json()) //usa ele como json

// const users = []

// app.post('/users', (req, res) => {  //req = requisição, res = resposta
//     users.push(req.body)  //coloca no array o corpo (o que foi enviado como json)

//     res.send('Deu bom')   //Dá uma confirmação de resposta
// })

// app.get('/users', (req,res) => { 
//     res.status(200).json(users)    //Caso o status seja 200(sucesso), ele retorna os elementos de users no formato json
// })

// app.listen(8080)  //Define a porta para rodar o servidor 

//Para usar o bancoDB, deve baixar o PRISMA.io, setup prisma orm mongodb , lá na documentação tem certinho como instalar o mongo no pc
//->npm i prisma --save-dev
//-> npx prisma init

//No arquivo .env criado, deve colocar o login e a senha

//npm install @prisma/client
//npx prisma studio
//npx prisma db push  ----------- para atualizar as alterações no db