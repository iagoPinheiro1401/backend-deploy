import express from "express";
import bodyParser from "body-parser";
import notesController from "./controllers/notes";

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/notes', notesController);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});

  