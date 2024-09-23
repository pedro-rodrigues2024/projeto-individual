-- Criação do banco de dados
CREATE DATABASE projetoIndividual;
-- DROP DATABASE projetoIndividual;
USE projetoIndividual;

-- Criação da tabela cadastroUsuario
CREATE TABLE cadastroUsuario (
    idCadastroUsuario INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    username VARCHAR(100),
    senha VARCHAR(100),
    fkPokemon INT,
    CONSTRAINT fk_pokemon FOREIGN KEY (fkPokemon) REFERENCES opcoesPokemon(idPokemon)
);

-- Criação da tabela opcoesPokemon
CREATE TABLE opcoesPokemon (
    idPokemon INT PRIMARY KEY AUTO_INCREMENT,
    nomePokemon VARCHAR(100) NOT NULL
);

-- Inserir  opções de Pokémon
INSERT INTO opcoesPokemon (idPokemon, nomePokemon) VALUES
(1, 'Annihilape'),
(2, 'Shuckle'),
(3, 'Mimikyu'),
(4, 'Garchomp'),
(5, 'Greninja'),
(6, 'Gengar'),
(7, 'Charizard'),
(8,  'Lucario'),
(9, 'Eevee'),
(10, 'Pikachu'),
(11, 'Outros') ;

-- Inserção de dados na tabela cadastroUsuario
INSERT INTO cadastroUsuario (email, username, senha, fkPokemon) VALUES
('pedro.email@gmail.com', 'PRIMEAPE', 'Prymal', 1),
('giulia.email@gmail.com', 'Felen', 'Week', 3),
('arthur.email@gmail.com', 'GrayWithfox', 'DarkHunter', 2);

INSERT INTO cadastroUsuario (email, username, senha, fkPokemon) VALUES
('joao.email@gmail.com', 'joao', '12345678', 1);

INSERT INTO cadastroUsuario (email, username, senha, fkPokemon) VALUES
('jack.email@gmail.com', 'jack', '87654321', 10);

-- Visualizar as tabelas cadastroUsuario e opcoesPokemon
SELECT * FROM cadastroUsuario;
SELECT * FROM opcoesPokemon;

-- Criação da tabela loginUsuario
CREATE TABLE loginUsuario (
    idLoginUsuario INT PRIMARY KEY AUTO_INCREMENT,
    fkCadastroUsuario INT,
    CONSTRAINT fkCadastroUsuario FOREIGN KEY (fkCadastroUsuario) REFERENCES cadastroUsuario(idCadastroUsuario),
    username VARCHAR(100),
    senha VARCHAR(100)
);

-- Inserção de dados na tabela loginUsuario
INSERT INTO loginUsuario (fkCadastroUsuario, username, senha) VALUES
(1, 'PRIMEAPE', 'Prymal'),
(3, 'Felen', 'Week'),
(2, 'GrayWithfox', 'DarkHunter');

-- Visualizar a tabela loginUsuario
SELECT * FROM loginUsuario;


-- mostra a quantidade de votos selecionados
SELECT COUNT(fkPokemon), nomePokemon
FROM cadastroUsuario
JOIN opcoesPokemon ON idPokemon = fkPokemon
GROUP BY nomePokemon;

-- mostra a quantidade de votos selecionados, só que, neste caso, emforma de ranking
SELECT COUNT(fkPokemon) AS quantidade, nomePokemon
FROM cadastrousuario
JOIN opcoesPokemon ON opcoesPokemon.idPokemon = cadastroUsuario.fkPokemon
GROUP BY nomePokemon
ORDER BY quantidade ASC;

-- Consultas para métricas

-- 1. Contagem de usuários por nome de usuário, ordenados em ordem alfabética
SELECT username, COUNT(*) AS count 
FROM cadastroUsuario 
GROUP BY username 
ORDER BY username;

-- 2. Contagem de logins por nome de usuário, ordenados em ordem alfabética
SELECT username, COUNT(*) AS count 
FROM loginUsuario 
GROUP BY username 
ORDER BY username;

-- 3. Usuário com o maior ID de cadastro
SELECT MAX(idCadastroUsuario) AS maxId 
FROM cadastroUsuario;

-- 4. Usuário com o menor ID de cadastro
SELECT MIN(idCadastroUsuario) AS minId 
FROM cadastroUsuario;

-- 5. Usuário com o maior ID de login
SELECT MAX(idLoginUsuario) AS maxId 
FROM loginUsuario;

-- 6. Usuário com o menor ID de login
SELECT MIN(idLoginUsuario) AS minId 
FROM loginUsuario;

-- 7. Detalhes do usuário com o maior ID de cadastro
SELECT * 
FROM cadastroUsuario 
WHERE idCadastroUsuario = (SELECT MAX(idCadastroUsuario) FROM cadastroUsuario);

-- 8. Detalhes do usuário com o menor ID de cadastro
SELECT * 
FROM cadastroUsuario 
WHERE idCadastroUsuario = (SELECT MIN(idCadastroUsuario) FROM cadastroUsuario);

-- 9. Detalhes do login com o maior ID de login
SELECT * 
FROM loginUsuario 
WHERE idLoginUsuario = (SELECT MAX(idLoginUsuario) FROM loginUsuario);

-- 10. Detalhes do login com o menor ID de login
SELECT * 
FROM loginUsuario 
WHERE idLoginUsuario = (SELECT MIN(idLoginUsuario) FROM loginUsuario);

-- Consultas adicionais usando JOIN

-- 11. Listar todos os logins com detalhes de usuários associados
SELECT l.idLoginUsuario, l.username AS loginUsername, l.senha AS loginSenha, 
       c.idCadastroUsuario, c.email, c.username AS cadastroUsername, c.fkPokemon, p.nomePokemon AS pokemonFavorito
FROM loginUsuario l
JOIN cadastroUsuario c ON l.fkCadastroUsuario = c.idCadastroUsuario
JOIN opcoesPokemon p ON c.fkPokemon = p.idPokemon
ORDER BY l.idLoginUsuario;

-- 12. Contagem de logins por usuário (username do cadastro)
SELECT c.username AS cadastroUsername, COUNT(l.idLoginUsuario) AS loginCount
FROM cadastroUsuario c
LEFT JOIN loginUsuario l ON c.idCadastroUsuario = l.fkCadastroUsuario
GROUP BY c.username
ORDER BY loginCount DESC;

-- 13. Usuário (do cadastro) com mais logins
SELECT c.username AS cadastroUsername, COUNT(l.idLoginUsuario) AS loginCount
FROM cadastroUsuario c
LEFT JOIN loginUsuario l ON c.idCadastroUsuario = l.fkCadastroUsuario
GROUP BY c.username
ORDER BY loginCount DESC
LIMIT 1;

-- 14. Usuário (do cadastro) com menos logins
SELECT c.username AS cadastroUsername, COUNT(l.idLoginUsuario) AS loginCount
FROM cadastroUsuario c
LEFT JOIN loginUsuario l ON c.idCadastroUsuario = l.fkCadastroUsuario
GROUP BY c.username
ORDER BY loginCount ASC
LIMIT 1;