
import express from 'express';
import cors from 'cors';
import usuariosRoutes from './routes/usuariosRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
app
app.use('/usuarios', usuariosRoutes);
app.use('/jogos', jogosRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

export default app;