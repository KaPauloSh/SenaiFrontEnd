let pessoas = [];
function adicionar(){
  let addPessoa = document.getElementById("nome").value;
  if(addPessoa != ""){
    pessoas.push(addPessoa);
  let mostrar = document.getElementById("visual").innerHTML = pessoas.join(", ");
  document.getElementById("nome").value = "";
  }
  else{
    alert("por favor preencha o campo!")
  }
}
function sortear(){
  let min = 0;
  let max = pessoas.length;
  if(pessoas == 0){
    alert("por favor, adicione algo a lista!")
  }else{
  let escolha = Math.floor(Math.random() * (max - min)+ min);
  let resultado = pessoas[escolha]
  document.getElementById("vencedor").innerHTML = resultado;
  }
}
function limpar(){
    pessoas = [];
    document.getElementById("visual").innerHTML = pessoas;
}