import express from 'express';
import { createCorretor, loginCorretor } from '../functions/corretor';

const corretorRouter = express.Router();

corretorRouter.post('/create', createCorretor);
corretorRouter.post('/login', loginCorretor);

export default corretorRouter;