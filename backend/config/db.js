import sql from "mssql";

const config = {
  user: "sa",              // seu usuário
  password: "1234",        // sua senha
  server: "localhost",     // ou IP do servidor
  database: "agendamento_db",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

export async function conectarDB() {
  try {
    await sql.connect(config);
    console.log("Conectado ao SQL Server");
  } catch (err) {
    console.error("Erro ao conectar:", err);
  }
}

export default sql;