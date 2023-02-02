import express, { Application } from 'express';

const app: Application = express();
const port: number = 8000;
app.listen(port, () => {
  console.log(`Starting service on port ${port}`);
});