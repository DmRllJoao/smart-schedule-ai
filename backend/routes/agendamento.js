import express from "express";
import {
  criarAgendamento,
  listarAgendamentos,
  horariosDisponiveis
} from "../controllers/agendamentoController.js";

const router = express.Router();

router.post("/", criarAgendamento);
router.get("/", listarAgendamentos);
router.get("/disponiveis", horariosDisponiveis);

export default router;