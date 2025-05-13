rodada = 1


while (rodada <=3){
    console.log("Rodada:" + rodada)

    escolhaJogador = prompt("Nível " + rodada+", escolha vidro (1,2 ou 3)?:")
    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == pisoQuebrado){
        alert("O piso quebrou")
        break;
    }
    else{
        alert("O piso estava na ponte: " + pisoQuebrado)
    }

    rodada = rodada + 1
}

if (rodada == 4){
    alert("Parabens! Você ganhou.")
}
