import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

app.get('/api/data-hora', (_request, response) => {
  response.set('Cache-Control', 'no-store');
  response.json({ dataHora: new Date().toISOString() });
});

app.listen(process.env.PORT || 3000);
