//random
function random(arg1, arg2){
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    var jogada = random(arg1, arg2);
    return jogada;
}

//questao 1
function tabu(){
    if(document.getElementById('tabNum').value != 0){
        resp1 = document.getElementById('tabResp').innerHTML = `Resultado: <br> ${tabuCalc()} `;
    }else{
        alert("O valor deve ser diferente de 0!");
    }
}
function tabuCalc(){
    let num = Number(document.getElementById("tabNum").value);
    let str = "";
    for (let i = 1; i <= 10; i++) {
        str += `${num} * ${i} = ${num * i}<br>`
    }
    return str;
}

//questao 2
function quest2Calc(q2valor1, q2valor2){
    var num1 = parseInt(document.getElementById("q2valor1").value);
    var num2 = parseInt(document.getElementById("q2valor2").value);

    if(num1 > num2) [num1, num2] = [num2, num1];

    let text = "";
    let i = num1;
    while(i < num2){
        text += i + ", "; 
        i++    
    }

    var nam = String(num2)
    var sim = text + nam;
    return sim;
    
}
function quest2(){
    var num1 = Number(document.getElementById("q2valor1").value);
    var num2 = Number(document.getElementById("q2valor2").value);
   
    resp2 = document.getElementById('tabResp2').innerHTML = `Resultado: Os número entre ${num1} e ${num2} são(${quest2Calc()})`;

}

//questao 3
let itensList = [];

function addList(){
    if(document.getElementById("quest3").value != ""){
        let itenNew = document.getElementById("quest3").value;
            itensList.push(`${itenNew}`);
    }else{
        alert("você deve preencher o campo!")
    }
}
function showList(){
    document.getElementById("tabResp3").innerHTML =
        itensList.reduce((anterior, proximo) => `${anterior}, ${proximo}`)
}
function clearList(){
    itensList = [];
    document.getElementById("tabResp3").innerHTML = "";
}

//questao 4
function loteria(){
    document.getElementById("megaSena").innerHTML = 
    `Resultado: ${random(0,60)},${random(0,60)},${random(0,60)},${random(0,60)},${random(0,60)},${random(0,60)}`;
}

//questao 5
let menList = [];
let womanList = [];

function add5(){
    let nome = document.getElementById("name").value;
    let sexo = document.getElementById("genre").value;
    if(nome != ""){
        if(sexo == 'M'){
            menList.push(nome);
        }else if(sexo =="F"){
            womanList.push(nome);
        }
    }else{
        alert("você precisa digitar um nome para adicionar a lista!");
    }
}

function show5(){
    if(menList == 0 && womanList == 0){
        alert("você precisa preencher uma das listas primeiro!");
    }else{
        document.getElementById("homem5").innerHTML = menList;
        document.getElementById("mulher5").innerHTML = womanList;
    }
}

function clear5(){
    menList = [];
    womanList = [];

    document.getElementById("homem5").innerHTML = "";
    document.getElementById("mulher5").innerHTML = "";
}

//desafio
let janKen = "";
function pedra(){
    self.janKen = "pedra"
    desafioSorteio();
}
function papel(){
    self.janKen = "papel"
    desafioSorteio();
}
function tesoura(){
    self.janKen = "tesoura"
    desafioSorteio();
}

function desafioSorteio(janKen){
    const jogada = random(1, 4);
    
    const resultado = {
        1: {
            icone:"✊🏽",
            "papel":"Vitória",
            "pedra":"Empate",
            "tesoura":"Derrota"
        },
        2: {
            icone:"🖐🏽",
            "papel":"Empate",
            "pedra":"Derrota",
            "tesoura":"Vitória"
        },
        3: {
            icone:"✌🏽",
            "papel":"Derrota",
            "pedra":"Vitória",
            "tesoura":"Empate"
        }
    }

    mao(resultado[jogada].icone)
    document.getElementById("desafioResultado")
        .innerHTML = resultado[jogada][self.janKen]
}

function mao(tipoMao){
    document.getElementById("desafio").innerHTML = tipoMao
}