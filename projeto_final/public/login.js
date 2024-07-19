function login() {
    var email = inpemail.value; // Var do input do E-mail
    var senha = inpsenha.value; // Var do input da senha

    var emailower = email.toLowerCase(); // Var para deixar o input do E-mail em minúsculo para melhor digitação

    if((emailower == "milhotech@gmail.com") && (senha == "MilhoTech325")) { // Verificação para checar se ambos os inputs estão corretos (para teste)
        alert(`Login efetuado`);
        window.location.href = "dashboard.html"
    } else {
    document.getElementById("section").style.visibility = "visible"; // Essa linha captura o elemento pelo ID no documento "document.getElementById" (nesse caso, a div "section") e troca o estilo de visibilidade ".style.visibility" para visível caso os inputs anteriores estiverem errados "visible" (para teste)
    }
}

function recuperar() {
    alert(`Esta página está em desenvolvimento.`);
}