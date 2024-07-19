function lutar() {
    var vida2 = 100;
    var tipoAtacante = document.getElementById("tipoAtacante").value; 
    var tipoDefensor = document.getElementById("tipoDefensor").value;
    var div_mensagem = document.getElementById("div_mensagem");
    div_mensagem.innerHTML = "";
    /*O Comando "document.getElementById" é utilizado para selecionar os elementos <select> que permitem ao usuário escolher os tipos de atacantes e defensores. 
    Isso permite que obtenha os valores selecionados pelos usuários e use essas informações para determinar o resultado da batalha.
    E também é uma forma do comando JS capturar os dado fora da function que estão presentes no arquivo "batalha.html",
    sendo eles: "var tipoAtacante = tipoAtacante.value;", "var tipoDefensor = tipoDefensor.value;" e "<div id="div_mensagem"></div>" */
    
    /*Tipo Normal */
    if (tipoAtacante == "op1") {
        if (tipoDefensor == "op1" || tipoDefensor == "op2" || tipoDefensor == "op3" || tipoDefensor == "op4" || tipoDefensor == "op6" || tipoDefensor == "op7" || tipoDefensor == "op8" || tipoDefensor == "op9" || tipoDefensor == "op10" || tipoDefensor == "op13" || tipoDefensor == "op14" || tipoDefensor == "op15" || tipoDefensor == "op16" || tipoDefensor == "op17" || tipoDefensor == "op18") {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Normal não tem vantagem contra nenhum tipo, porém, ele dá dano neutro nos tipos Normal, Lutador, Voador, Venenoso, Terra, Inseto, Fogo, Planta, Água, Elétrico, Psiquico, Gelo, Dragão, Sombrio e Fada. <br>`;
        } else if (tipoDefensor == "op5" || tipoDefensor == "op12") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Pedra e Metal têm resistência aos ataques do tipo Normal. <br>`;
        } else if (tipoDefensor == "op11") {
            vida2 -= 0;
            div_mensagem.innerHTML += `O tipo Fantasma é imune aos ataques do tipo Normal. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Elétrico*/
    if (tipoAtacante == "op2") {
        if (tipoDefensor == "op4" || tipoDefensor == "op13") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Elétrico tem vantagem contra Voador e Água. <br>`;
        } else if (tipoDefensor == "op2" || tipoDefensor == "op8" || tipoDefensor == "op17") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Elétrico, Planta e Dragão têm resistência aos ataques do tipo Elétrico. <br>`;
        } else if (tipoDefensor == "op15") {
            vida2 -= 0;
            div_mensagem.innerHTML += `O tipo Terra é imune aos ataques do tipo Elétrico. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Elétrico dá dano neutro nos tipos Normal, Lutador, Venenoso, Pedra, Inseto, Fantasma, Metal, Fogo, Psiquico, Gelo, Sombrio e Fada. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Lutador*/
    if (tipoAtacante == "op3") {
        if (tipoDefensor == "op1" || tipoDefensor == "op5" || tipoDefensor == "op6" || tipoDefensor == "op14" || tipoDefensor == "op12") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Lutador tem vantagem contra Normal, Pedra, Sombrio, Gelo e Metal. <br>`;
        } else if (tipoDefensor == "op9" || tipoDefensor == "op4" || tipoDefensor == "op16" || tipoDefensor == "op10" || tipoDefensor == "op18") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Venenoso, Voador, Inseto, Psíquico e Fada têm resistência aos ataques do tipo Lutador. <br>`;
        } else if (tipoDefensor == "op11") {
            vida2 -= 0;
            div_mensagem.innerHTML += `O tipo Fantasma é imune aos ataques do tipo Lutador. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Lutador dá dano neutro nos tipos Lutador, Terra, Fogo, Água, Planta, Elétrico e Dragão. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Voador*/
    if (tipoAtacante == "op4") {
        if (tipoDefensor == "op3" || tipoDefensor == "op8" || tipoDefensor == "op16") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Voador tem vantagem contra os tipos Inseto, Lutador e Planta. <br>`;
        } else if (tipoDefensor == "op2" || tipoDefensor == "op5" || tipoDefensor == "op12") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Elétrico, Pedra e Metal têm resistência aos ataques do tipo Voador. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Voador dá dano neutro nos tipos Normal, Voador, Sombrio, Fogo, Venenoso, Psiquico, Fantasma, Águs, Terra, Dragão e Fada. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Pedra */
    if (tipoAtacante == "op5") {
        if (tipoDefensor == "op16" || tipoDefensor == "op7" || tipoDefensor == "op4" || tipoDefensor == "op14") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Pedra tem vantagem contra os tipos Inseto, Fogo, Voador e Gelo. <br>`;
        } else if (tipoDefensor == "op3" || tipoDefensor == "op15" || tipoDefensor == "op12") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Lutador, Terra e Metal têm resistência aos ataques do tipo Pedra. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Pedra dá dano neutro nos tipos Normal, Venenoso, Pedra, Fantasma, Água, Planta, Elétrico, Psiquico, Dragão, Sombrio e Fada. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Sombrio*/
    if (tipoAtacante == "op6") {
        if (tipoDefensor == "op3" || tipoDefensor == "op10" || tipoDefensor == "op11") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Sombrio tem vantagem contra os tipos Psiquico e Fantasma. <br>`;
        } else if (tipoDefensor == "op2" || tipoDefensor == "op5" || tipoDefensor == "op12") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Lutador, Sombrio e Fada têm resistência aos ataques do tipo Sombrio. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Sombrio dá dano neutro nos tipos Normal, Voador, Venenoso, Terra, Pedra, Inseto, Metal, Fogo, Água, Planta, Elétrico, Gelo e Dragão. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Fogo*/
    if (tipoAtacante == "op7") {
        if (tipoDefensor == "op8" || tipoDefensor == "op14" || tipoDefensor == "op12" || tipoDefensor == "op16") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Fogo tem vantagem contra os tipos Inseto, Planta, Gelo e Metal. <br>`;
        } else if (tipoDefensor == "op17" || tipoDefensor == "op13" || tipoDefensor == "op5" || tipoDefensor == "op7") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Dragão, Água, Pedra e Fogo  têm resistência aos ataques do tipo Fogo. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Fogo dá dano neutro nos tipos Normal, Elétrico, Lutador, Voador, Sombrio, Venenoso, Psiquico, Fantasma, Terra e Fada. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Plnta*/
    if (tipoAtacante == "op8") {
        if (tipoDefensor == "op13" || tipoDefensor == "op15" || tipoDefensor == "op5") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Planta tem vantagem contra os tipos Água, Terra e Pedra. <br>`;
        } else if (tipoDefensor == "op16" || tipoDefensor == "op17" || tipoDefensor == "op7" || tipoDefensor == "op4"  || tipoDefensor == "op8"  || tipoDefensor == "op9"  || tipoDefensor == "op12") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Inseto, Dragão, Fogo, Voador, Planta, Venenoso e Metal têm resistência aos ataques do tipo Planta. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Planta dá dano neutro nos tipos Normal, Elétrico, Lutador, Sombrio, Psiquico, Fantasma, Gelo e Fada. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Venenoso*/
    if (tipoAtacante == "op9") {
        if (tipoDefensor == "op8" || tipoDefensor == "op18") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Venenoso tem vantagem contra os tipos Planta e Fada. <br>`;
        } else if (tipoDefensor == "op9" || tipoDefensor == "op15" || tipoDefensor == "op5" || tipoDefensor == "op11") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Venenoso, Terra, Pedra e Fantasma têm resistência aos ataques do tipo Venenoso. <br>`;
        } else if (tipoDefensor == "op12") {
            vida2 -= 0;
            div_mensagem.innerHTML += `O tipo Metal é imune aos ataques do tipo Venenoso. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Venenoso dá dano neutro nos tipos Normal, Elétrico, Lutador, Voador, Sombrio, Fogo, Psiquico, Água, Gelo, Inseto, Dragão. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Psiquico*/
    if (tipoAtacante == "op10") {
        if (tipoDefensor == "op3" || tipoDefensor == "op10") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Psiquico tem vantagem contra os tipos Lutador e Venenoso. <br>`;
        } else if (tipoDefensor == "op10" || tipoDefensor == "op12") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Psiquico e Metal têm resistência aos ataques do tipo Venenoso. <br>`;
        } else if (tipoDefensor == "op6") {
            vida2 -= 0;
            div_mensagem.innerHTML += `O tipo Sombrio é imune aos ataques do tipo Psiquico. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Psiquico dá dano neutro nos tipos Normal, Elétrico, Voador, Pedra, Sombrio, Fogo, Planta, Fantasma, Água, Gelo, Terra, Inseto, Dragão e Fada. <br>`
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Fantasma*/
    if (tipoAtacante == "op11") {
        if (tipoDefensor == "op11" || tipoDefensor == "op10") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Fantasma tem vantagem contra os tipos Psiquicos e Fantasma. <br>`;
        } else if (tipoDefensor == "op6") {
            vida2 -= 25;
            div_mensagem.innerHTML += `O tipo Sombrio têm resistência aos ataques do tipo Fantasma. <br>`;
        } else if (tipoDefensor == "op1") {
            vida2 -= 0;
            div_mensagem.innerHTML += `O tipo Noemal é imune aos ataques do tipo Fantasma. <br>`;
        }else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Fantasma dá dano neutro nos tipos Elétrico, Lutador, Voador, Pedra, Fogo, Planta, Venenoso, Metal, Água, Gelo, Terra, Inseto, Dragãoe e Fada. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Metal*/
    if (tipoAtacante == "op12") {
        if (tipoDefensor == "op18" || tipoDefensor == "op14" || tipoDefensor == "op5") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Metal tem vantagem contra os tipos Fada, Gelo e Pedra. <br>`;
        } else if (tipoDefensor == "op2" || tipoDefensor == "op7" || tipoDefensor == "op12" || tipoDefensor == "op13") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Elétrico, Fogo, Metal e Água têm resistência aos ataques do tipo Metal. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Metal dá dano neutro nos tipos Noemla, Lutador, Voador, Sombrio, Planta, Venenoso, Psiquico, Fantasma, Terra, Inseto e Dragão. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Água*/
    if (tipoAtacante == "op13") {
        if (tipoDefensor == "op7" || tipoDefensor == "op15" || tipoDefensor == "op5") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Água tem vantagem contra os tipos Fogo, Terra e Pedra. <br>`;
        } else if (tipoDefensor == "op2" || tipoDefensor == "op5" || tipoDefensor == "op12") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Dragão, Planta e Água têm resistência aos ataques do tipo Água. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Água dá dano neutro nos tipos Normla, Elétrico, Lutador, Voador, Sombrio, Venenoso, Psiquico, Fantasma, Metal, Gelo, Inseto e Fada. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Gelo*/
    if (tipoAtacante == "op14") {
        if (tipoDefensor == "op17" || tipoDefensor == "op4" || tipoDefensor == "op8" || tipoDefensor == "op15") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Gelo tem vantagem contra os tipos Dragão, Voador, Planta e Terra. <br>`;
        } else if (tipoDefensor == "op14" || tipoDefensor == "op13" || tipoDefensor == "op7" || tipoDefensor == "op12") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Gelo, Água, Fogo e Metal têm resistência aos ataques do tipo Gelo. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Gelo dá dano neutro nos tipos Normal, Elétrico, Lutador, Pedra, Sombrio, Venenoso, Psiquico, Fantasma, Inseto e Fada. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }


    /*Tipo Terra*/
    if (tipoAtacante == "op15") {
        if (tipoDefensor == "op7" || tipoDefensor == "op2" || tipoDefensor == "op9" || tipoDefensor == "op5" || tipoDefensor == "op12") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Terra tem vantagem contra os tipos Fogo, Eletrico, Venenoso, Pedra e Metal. <br>`;
        } else if (tipoDefensor == "op16" || tipoDefensor == "op8") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Inseto e Planta têm resistência aos ataques do tipo Terra. <br>`;
        } else if (tipoDefensor == "op15") {
            vida2 -= 0;
            div_mensagem.innerHTML += `O tipo Voador é imune aos ataques do tipo Terra. <br>`;
        }else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Terra dá dano neutro nos tipos Normal, Lutador, Sombrio, Psiquico, Fantasma, Água, Gelo, Terra, Dragão e Fada. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Inseto*/
    if (tipoAtacante == "op16") {
        if (tipoDefensor == "op6" || tipoDefensor == "op8" || tipoDefensor == "op10") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Inseto tem vantagem contra os tipos Sombrio, Planta e Psiquico. <br>`;
        } else if (tipoDefensor == "op18" || tipoDefensor == "op3" || tipoDefensor == "op7") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipos Fada, Lutador, Fogo, Voador, Fantasma, Venenoso e Metal têm resistência aos ataques do tipo Inseto . <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Inseto dá dano neutro nos tipos Normal, Elétrico, Pedra, Água, Gelo, Terra, Inseto e Dragão . <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Dragão*/
    if (tipoAtacante == "op17") {
        if (tipoDefensor == "op17") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Dragão tem vantagem apenas contra o tipo Dragão. <br>`;
        } else if (tipoDefensor == "op12") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Apenas o tipo Metal resiste aos ataques do tipo Dragão. <br>`;
        }else if (tipoDefensor == "op18") {
            vida2 -= 0;
            div_mensagem.innerHTML += `O tipo Fada é imune aos ataques do tipo Dragão. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Dragão dá dano neutro nos tipos Normal, Elétrico, Lutador, Voador, Pedra, Sombrio, Fogo, Planta, Venenoso, Psiquico, Fantasma, Água, Gelo, Terra e Inseto. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }

    /*Tipo Fada*/
    if (tipoAtacante == "op18") {
        if (tipoDefensor == "op17" || tipoDefensor == "op3" || tipoDefensor == "op6") {
            vida2 -= 100;
            div_mensagem.innerHTML += `O tipo Fada tem vantagem contra os tipos Dragão, Lutador e Sombrio. <br>`;
        } else if (tipoDefensor == "op7" || tipoDefensor == "op9" || tipoDefensor == "op12") {
            vida2 -= 25;
            div_mensagem.innerHTML += `Os tipo Fogo, Venenoso e Metal têm resistência aos ataques do tipo Fada. <br>`;
        } else {
            vida2 -= 50;
            div_mensagem.innerHTML += `O tipo Fada dá dano neutro nos tipos Normal, Elétrico, Voador, Pedra, Planta, Psiquico, Fantasma, Água, Gelo, Terra, Inseto e Fada. <br>`;
        }
        div_mensagem.innerHTML += `Vida do defensor após o ataque: ${vida2}/100<br>`;
    }
}