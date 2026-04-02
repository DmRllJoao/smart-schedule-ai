import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { conectarDB } from "./config/db.js";

conectarDB();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});