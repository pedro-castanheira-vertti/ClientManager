import express from 'express';
import { createUser, updateUser, deleteUser, getAllUsers, getUserByCpf, getUsersBySeguradora } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/create', createUser);
userRouter.put('/update/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);
userRouter.get('/getAll', getAllUsers);
userRouter.get('/getByCpf/:cpf', getUserByCpf);
userRouter.get('/getBySeguradora/:seguradora', getUsersBySeguradora);

export default userRouter;