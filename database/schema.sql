-- Tabela de Empresas (clínicas, salões, etc)
CREATE TABLE empresas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(20),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Clientes
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) UNIQUE,
    email VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Serviços
CREATE TABLE servicos (
    id SERIAL PRIMARY KEY,
    empresa_id INT REFERENCES empresas(id),
    nome VARCHAR(100) NOT NULL,
    duracao INT NOT NULL, -- duração em minutos
    preco DECIMAL(10,2),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Profissionais
CREATE TABLE profissionais (
    id SERIAL PRIMARY KEY,
    empresa_id INT REFERENCES empresas(id),
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Agendamentos
CREATE TABLE agendamentos (
    id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES clientes(id),
    servico_id INT REFERENCES servicos(id),
    profissional_id INT REFERENCES profissionais(id),
    data DATE NOT NULL,
    hora TIME NOT NULL,
    status VARCHAR(20) DEFAULT 'agendado', -- agendado, cancelado, concluido
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
