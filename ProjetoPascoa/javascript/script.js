lista = [];
function buscarListaProduto(){
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "javascript/produtos.json");
    ajax.send();
    ajax.onload = function () {
        lista = JSON.parse(this.response);
        replicar();
    }
}

function replicar(){
    let i = 0;
    for (const p of lista){
        let id = i;
        let produto = document.querySelector(".produto").cloneNode(true);
        //item
        produto.querySelector(".tituloProduto").innerHTML = p.nome;
        produto.querySelector("img").innerHTML = p.img;
        produto.querySelector(".descricaoProduto").innerHTML = p.descricao;
        produto.querySelector(".precoProduto").innerHTML = p.valor;
        produto.querySelector(".disponibilidadeProduto").innerHTML = p.quantidade;

        produto.querySelector(".minus").addEventListener("click", function(){ alterarQt(id, -1) });
        produto.querySelector(".plusle").addEventListener("click", function(){ alterarQt(id, 1) });

        document.querySelector(".item").append(produto);
        i++
    }
    document.querySelector(".produto").remove();
}

function alterarQt(id, qt){
    let p = lista[id];
    p.qt += qt;
    if(p.qt < 0) p.qt = 0;
    document.getElementsByClassName("quantidadeNumero")[id].innerHTML = p.qt;
    console.log(p.qt)
}

buscarListaProduto();