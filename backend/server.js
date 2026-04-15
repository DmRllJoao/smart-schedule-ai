import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import agendamentoRoutes from "./routes/agendamento.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/agendamento", agendamentoRoutes);

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});