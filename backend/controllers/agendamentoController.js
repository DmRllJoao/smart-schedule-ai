const agendamentos = [];

export const criarAgendamento = (req, res) => {
  const { nome, servico, data, hora } = req.body;

  const conflito = agendamentos.find(
    (a) => a.data === data && a.hora === hora
  );

  if (conflito) {
    return res.status(400).json({
      erro: "Horário já ocupado",
    });
  }

  const novoAgendamento = {
    id: agendamentos.length + 1,
    nome,
    servico,
    data,
    hora,
  };

  agendamentos.push(novoAgendamento);

  return res.json({
    mensagem: "Agendamento criado com sucesso",
    agendamento: novoAgendamento,
  });
};

export const listarAgendamentos = (req, res) => {
  return res.json(agendamentos);
};

export const horariosDisponiveis = (req, res) => {
  const { data } = req.query;

  const horariosPadrao = [
    "08:00", "09:00", "10:00", "11:00",
    "14:00", "15:00", "16:00", "17:00"
  ];

  const ocupados = agendamentos
    .filter(a => a.data === data)
    .map(a => a.hora);

  const disponiveis = horariosPadrao.filter(
    h => !ocupados.includes(h)
  );

  return res.json(disponiveis);
};