import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/', routes);

app.listen(3333, () => {
  console.log('Backend listening on port 3333');
});
