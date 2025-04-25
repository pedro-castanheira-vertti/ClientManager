import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient()

export async function createCorretor(req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await prisma.corretor.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                cpf: req.body.cpf,
                password: hashedPassword
            }
        })
        res.status(201).send('Corretor created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating corretor:' + error.message);
    }
}

export async function loginCorretor(req, res) {
    try {
        const { email, password } = req.body;

        const user = await prisma.corretor.findUnique({
            where: {
                email: email
            }
        })
        if (!user) {
            return res.status(404).send('User not found');
        }

        const senhaValida = await bcrypt.compare(password, user.password);
        if (!senhaValida) {
            return res.status(401).send('Invalid password');
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )
        res.status(200).json({ message: 'Login successful', token })
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loggin in corretor: ' + error.message);
    }
}