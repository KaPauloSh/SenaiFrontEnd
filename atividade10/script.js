function calcular(){
    let tempo = Number(document.getElementById('number').value);
    let velocidade = Number(document.getElementById('number2').value);
    let total = tempo * velocidade;
    let gastoCombustivel = total / 12;

    if(tempo == 0){
        alert("por favor, digite um número no primeiro campo!");
        return;
    }else if(velocidade == 0){
        alert("por favor, digite um número no segundo campo!");
        return;
    }
    else{
        let resposta = document.getElementById("resposta").value = gastoCombustivel.toFixed(3);
        return resposta;
    }
}