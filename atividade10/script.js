function calcular(){
    let tempo = Number(document.getElementById('number').value);
    let velocidade = Number(document.getElementById('number2').value);
    let total = tempo * velocidade;
    let gastoCombustivel = total / 12;

    let resposta = document.getElementById("resposta").value = gastoCombustivel.toFixed(3);
    return resposta;
}