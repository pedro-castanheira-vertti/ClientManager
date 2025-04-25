import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUser(req, res) {
    try {
        const apolices = req.body.apolices;

        await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                cpf: req.body.cpf,
                phone: req.body.phone,
                apolices: {
                    create: apolices.map(apolice => ({
                        numApolice: apolice.numApolice,
                        seguradora: apolice.seguradora,
                        tipoSeguro: apolice.tipoSeguro,
                        startDate: apolice.startDate,
                        endDate: apolice.endDate
                    }))
                }
            }
        })
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user: ' + error.message);
    }
}

export async function updateUser(req, res) {
    try {
        await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                cpf: req.body.cpf,
                phone: req.body.phone,
                apolices: {
                    updateMany: req.body.apolices.map(apolice => ({
                        where: { id: apolice.id },
                        data: {
                            numApolice: apolice.numApolice,
                            seguradora: apolice.seguradora,
                            tipoSeguro: apolice.tipoSeguro,
                            startDate: apolice.startDate,
                            endDate: apolice.endDate
                        }
                    }))
                }
            }
        })
        res.status(200).send('User updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating user: ' + error.message);
    }
}

export async function getAllUsers(req, res) {
    try {
        await prisma.user.findyMany({
            include: {
                apolices : true
            }
        })
        res.status(200).json('Users fetched successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching users: ' + error.message);
    }
}

export async function getUserByCpf(req, res) {
    try {
        await prisma.user.findUnique({
            where: {
                cpf: req.params.cpf
            } , 
            include: {
                apolices : true
            }
        })
        res.status(200).json('User fetched by CPF successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching user by CPF:' + error.message);
    }
}

export async function getUsersBySeguradora(req, res){
    try {
        await prisma.user.findMany({
            where: {
                apolices: {
                    some: {
                        seguradora: req.params.seguradora
                    }
                }
            },
            include: {
                apolices : true
            }
        })
        res.status(200).json('Users fetched by seguradora successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching users by seguradora:' + error.message);
    }
}

export async function deleteUser(req, res) {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('User deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting user: ' + error.message);
    }
}