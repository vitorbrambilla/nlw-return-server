import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const host = 'http://localhost';
const port = 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running at ${host}:${port}`)
});