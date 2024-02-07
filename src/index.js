import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import notesController from "./controllers/notes";

const app = express();
const port = 3333;

const corsOptions = {
  origin: 'http://localhost:3000',  // ou a origem do seu frontend
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/notes', notesController);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
  