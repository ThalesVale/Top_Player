
import express from 'express';
import cors from 'cors';
import usuariosRoutes from './routes/usuariosRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

export default app;