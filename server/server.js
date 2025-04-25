import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import corretorRouter from './routes/corretorRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/corretor', corretorRouter);

app.listen(8080);


