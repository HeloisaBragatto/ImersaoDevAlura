idade = prompt("Digite sua idade:")

if (idade < 18){
    alert("Você está bloqueado")
}
else{
    escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if(escolhaComputador == escolhaJogador){
        alert("Vocês jogaram o mesmo")
    }

    else if (escolhaComputador == 1){
        if (escolhaJogador == 2){
            alert("Você venceu")
        }
    }

    else if (escolhaComputador == 2){
        if (escolhaJogador == 3){
            alert("Você venceu")
        }
    }

    else if (escolhaComputador == 3){
        if (escolhaJogador == 1){
            alert("Você venceu")
        }
    }

    alert("A escolha do computador foi " + escolhaComputador)
}