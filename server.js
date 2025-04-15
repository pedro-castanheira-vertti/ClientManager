import dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from '@prisma/client'
import express from 'express' //npm i express
import cors from 'cors'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


const prisma = new PrismaClient()

const app = express()
app.use(express.json()) //usa ele como json
app.use(cors())

app.post('/users', async (req, res) => {  //req = requisição, res = resposta
    try {
        const apolices = req.body.apolices || [];

        console.log(req.body)
        await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
                cpf: req.body.cpf,
                phone: req.body.phone,
                apolices: {
                    create: apolices.map(apolice => ({
                        numApolice: apolice.numApolice,
                        nomeSeguradora: apolice.nomeSeguradora,
                        tipoSeguro: apolice.tipoSeguro,
                    }))
                }
            }
        })
        res.status(201).send('Deu bom')
    } catch (error) {
        console.error('Erro ao criar o usuario:', error)
        res.status(500).send('Erro ao criar o usuário: ' + error.message); // Exibe a mensagem de erro detalhada
    }
})

app.get('/users', async (req, res) => {
    let users = []

    try {
        users = await prisma.user.findMany({
            include: {          //esse include, faz com que ele retorne as apólices também
                apolices: true
            }
        })
        res.status(200).json(users)
    } catch (req) {
        console.error(req)
        res.status(500).send('Erro ao buscar usuários')
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
                cpf: req.body.cpf,
                phone: req.body.phone,
                apolices: {
                    deleteMany: {}, //Ele remove todas as apólices antigas
                    create: req.body.apolices.map(apolice => ({
                        numApolice: apolice.numApolice,
                        nomeSeguradora: apolice.nomeSeguradora,
                        tipoSeguro: apolice.tipoSeguro,
                    }))
                }
            }
        })
        res.status(200).json(updatedUser)
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro ao editar usuário')
    }
})

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        },
    })
    res.status(200).json({ message: 'Usuário Deletado com sucesso' })
})

//-------------------------------------------------------------------------------------
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10) //cria um hash da senha com 10 rounds de "salting", o que dificulta ataques de força bruta

        await prisma.corretor.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                cpf: req.body.cpf,
                password: hashedPassword
            }
        })
        res.status(200).json({ message: 'Usuário criado!' })
    } catch (error) {
        console.error('Erro ao criar:', error)
        res.status(500).send("Erro!")
    }
})

//-------------------------------------------------------------------------------------

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await prisma.corretor.findFirst({ where: { email } });
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado' })

        const senhaValida = await bcrypt.compare(password.trim(), user.password.trim());
        if (!senhaValida) return res.status(401).json({ message: 'Senha incorreta' });

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET, // Chave secreta
            { expiresIn: '1h' }
        )
        res.status(200).json({ message: 'Login bem-sucedido', token });
    } catch (error) {
        console.error(error)
        res.status(500).send("Não foi possível logar")
    }
});


app.listen(8080)  //Define a porta para rodar o servidor 
