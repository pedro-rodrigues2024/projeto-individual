var database = require("../database/config")

function autenticar(email, senha1) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha1)
    var instrucaoSql = `
        SELECT username, senha FROM cadastroUsuario WHERE username = '${email}' AND senha = '${senha1}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(username, email, senha1, pokémonFavorito) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", username, email, senha1);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO cadastroUsuario (username, email, senha, pokémonFavorito) VALUES ('${username}', '${email}', '${senha1}', '${pokémonFavorito}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// mostra a quantidade de votos cada uma das 11 opções recebeu
function pokemon() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    var instrucaoSql = `
        select count(fkPokemon) as favorito, nomePokemon from cadastroUsuario join opcoesPokemon on idPokemon = fkPokemon group by nomePokemon;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pokemonRank() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    var instrucaoSql = `
        SELECT COUNT(fkPokemon) AS quantidade, nomePokemon
        FROM cadastrousuario
        JOIN opcoesPokemon ON opcoesPokemon.idPokemon = cadastroUsuario.fkPokemon
        GROUP BY nomePokemon
        ORDER BY quantidade ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pokemonPct() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    var instrucaoSql = `
        SELECT fkPokemon, nomePokemon
        FROM cadastrousuario
        JOIN opcoesPokemon ON opcoesPokemon.idPokemon = cadastroUsuario.fkPokemon
        ORDER BY fkPokemon ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    pokemon,
    pokemonRank,
    pokemonPct
};