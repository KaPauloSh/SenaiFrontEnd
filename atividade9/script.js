//questao 1
function tabu(){
    if(document.getElementById('tabNum').value != 0){
        resp1 = document.getElementById('tabResp').innerHTML = `Resultado: <br> ${tabuCalc()} `;
    }else{
        alert("O valor deve ser diferente de 0!");
    }
}
function tabuCalc(num1){
    var num1 = Number(document.getElementById("tabNum").value);
    var num = num1 *1;
    var num2 = num1 *2;
    var num3 = num1 *3;
    var num4 = num1 *4;
    var num5 = num1 *5;
    var num6 = num1 *6;
    var num7 = num1 *7;
    var num8 = num1 *8;
    var num9 = num1 *9;
    var num10 = num1 *10;
    const tabAr = [String(num1)+" * 1 = "
    +num, String(num1)+" * 2 = "
    +num2, String(num1)+" * 3 = "
    +num3, String(num1)+" * 4 = "
    +num4, String(num1)+" * 5 = "
    +num5, String(num1)+" * 6 = "
    +num6, String(num1)+" * 7 = "
    +num7, String(num1)+" * 8 = "
    +num8, String(num1)+" * 9 = "
    +num9, String(num1)+" * 10 = "
    +num10];
    let tabText = "";
    for (let i = 0; i < tabAr.length; i++) {
    tabText += tabAr[i] + "<br>";
    }
    return tabText;
}

//questao 2
function quest2Calc(q2valor1, q2valor2){
    var num1 = document.getElementById("q2valor1").value;
    var num2 = document.getElementById("q2valor2").value;

    if(num1 > num2) [num1, num2] = [num2, num1];

    let text = "";
    let i = num1;
    while(i < num2){
        text += i + ","; 
        i++    
    }

    var nam = String(num2)
    var sim = text + nam;
    return sim;
    
}
function quest2(){
    var num1 = document.getElementById("q2valor1").value;
    var num2 = document.getElementById("q2valor2").value;
    if(num1.length <= 4||num2.length <= 4){
        resp2 = document.getElementById('tabResp2').innerHTML = `Resultado: Os número entre ${num1} e ${num2} são(${quest2Calc()})`;
    }
    else{
        alert("use um número menor!");
    }
    
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
    document.getElementById("tabResp3").innerHTML = itensList
}
function clearList(){
    itensList = [];
    document.getElementById("tabResp3").innerHTML = "";
}

//questao 4
function loteria(){
    document.getElementById("megaSena").innerHTML = 
    `Resultado: ${sortear(0,60)},${sortear(0,60)},${sortear(0,60)},${sortear(0,60)}
    ,${sortear(0,60)},${sortear(0,60)}`;
}
function sortear(f, i){
    if (i > f) {
    numInicial = f;numFinal = i+1;
    } else {
        numInicial = i;numFinal = f+1;
    }
    numRandom = Math.floor((Math.random()*(numFinal-numInicial))+numInicial);
    return numRandom;
    //var aleatorio = document.getElementById("megaSena").innerHTML = Math.floor(Math.random() * 100);
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