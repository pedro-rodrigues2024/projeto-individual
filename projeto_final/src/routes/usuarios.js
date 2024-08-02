var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/pokemon", function (req, res) {
    usuarioController.pokemon(req, res);
});

router.get("/pokemonRank", function (req, res) {
    usuarioController.pokemonRank(req, res);
});

router.get("/pokemonPct", function (req, res) {
    usuarioController.pokemonPct(req, res);
});
module.exports = router;