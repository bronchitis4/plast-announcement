import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import eventRouter from './routes/event.controller.js'
import annoucedRouter from './routes/annouced.routes.js'

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors())
app.use('/auth', authRouter);
app.use('/event', eventRouter);
app.use('/annouced', annoucedRouter);

app.listen(PORT, () => {
    console.log("Сервер прослуховується")
})

