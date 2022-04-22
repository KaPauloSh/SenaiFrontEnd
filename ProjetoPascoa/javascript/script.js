lista = [];
function buscarListaProduto(){
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "javascript/produtos.json");
    ajax.send();
    ajax.onload = function (){
        lista = JSON.parse(this.response);
        replicar();
    }
}

function floatParaReal(valor) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor)
}

function replicar(){
    let i = 0;
    for (const p of lista){
        let id = i;
        let produto = document.querySelector(".produto").cloneNode(true);
        //item
        produto.querySelector(".tituloProduto").innerHTML = p.nome.toUpperCase();
        produto.querySelector(".produtoImg").src = p.img;
        produto.querySelector(".descricaoProduto").innerHTML = p.descricao;
        produto.querySelector(".precoProduto").innerHTML = floatParaReal(p.valor);
        produto.querySelector(".quantidadeNumero").innerHTML = p.quantidade;

        produto.querySelector(".minus").addEventListener("click", function(){ alterarQt(id, -1) });
        produto.querySelector(".plusle").addEventListener("click", function(){ alterarQt(id, 1) });

        document.querySelector(".item").append(produto);
        i++
    }
    document.querySelector(".produto").remove();
}

function alterarQt(id, quantidade){
    let p = lista[id];
    p.quantidade += quantidade;
    if(p.quantidade < 0) p.quantidade = 0;
    if(p.quantidade > 999) p.quantidade = 999;
    document.getElementsByClassName("quantidadeNumero")[id].innerHTML = p.quantidade;
    console.log(p.quantidade)
}

buscarListaProduto();

let msgModal = "";
function mostrarPedidos(){
    let msgModalPadrao = "<p>Nenhum produto foi selecionado.</p>";
    let subTotal = 0;
    let total = 0;
    for (const produto of lista) {
        if(produto.quantidade > 0){
            subTotal = (produto.valor * produto.quantidade).toFixed(2);
            total += +subTotal;
            msgModal += `<p>${produto.nome.toUpperCase()} (R$: ${produto.valor} x ${produto.quantidade}) = ${subTotal}</p>`;
        }
    }
    if(msgModal == ""){
        
        document.querySelector("#btEnviar").disabled = "disabled"; 
        document.querySelector(".modal-body").innerHTML = msgModalPadrao;
    }else{
        msgModal += `<b>Total ${total.toFixed(2)}</b>`
        document.querySelector("#btEnviar").disabled = "";
        document.querySelector(".modal-body").innerHTML = msgModal;
    }
    
}

function enviar(){
    let fone = '992015114';
    msgModal = msgModal.replaceAll("<p>", "").replaceAll("</p>", "\n");
    msgModal = msgModal.replaceAll("<b>", "*").replaceAll("</b>", "*");
    msgModal = msgModal.replaceAll("%", "");
    let nome = document.querySelector("#nome").value;
    let endereco = document.querySelector("#endereco").value;
    msgModal += `\nNome: *${nome}*`
    msgModal += `\nEndereço: *${endereco}*`
    msgModal = encodeURI(msgModal);
    
    link = `https://api.whatsapp.com/send?phone=${fone}&text=${msgModal}`;
    window.open(link, '_blanck')
}

