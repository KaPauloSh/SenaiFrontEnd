//objeto
var pessoa = JSON.parse(localStorage.getItem("pessoa"));
if (pessoa == null) {
    pessoa = [];
}

//função para confirmar
function confirmar() {
    var paciente = {};

    paciente.nome = document.getElementById("nome").value.toUpperCase();
    paciente.status = document.getElementById("status").value;
    paciente.local = document.getElementById("local").value;
    paciente.horaInicio = document.getElementById("horaInicio").value;
    paciente.inicioPrevisto = document.getElementById("inicioPrevisto").value;
    paciente.fimPrevisto = document.getElementById("fimPrevisto").value;
    paciente.saidaPrevista = document.getElementById("saidaPrevista").value;

    var id = document.getElementById("id").value;

    if (id == '') {
        pessoa.push(paciente);
    } else {
        pessoa[id] = paciente;
    }

    localStorage.setItem("pessoa", JSON.stringify(pessoa));
    atualizarTabela();
    novo();
}

//registrador
function atualizarTabela() {
    
    var pessoa = JSON.parse(localStorage.getItem("pessoa"));
    var corpoTabela = "";
    for (i in pessoa) {
        corpoTabela += `<tr onclick="editar(${i})">`;
        corpoTabela += `<td>${pessoa[i].nome}</td>`;
        corpoTabela += colunaStatus(pessoa[i].status, pessoa[i].local);
        corpoTabela += `<td>${pessoa[i].horaInicio}</td>`;
        corpoTabela += `<td>${pessoa[i].inicioPrevisto}</td>`;
        corpoTabela += `<td>${pessoa[i].fimPrevisto}</td>`;
        corpoTabela += `<td>${pessoa[i].saidaPrevista}</td>`;
        corpoTabela += `</tr>`;
    }
    // MOSTRA OS DADOS
    document.getElementById("corpoTabela").innerHTML = corpoTabela;
}

//localização do paciente
function colunaStatus(status, local) {
    var retorno = "<td &class>&status &local</td>";
    local = (local == "") ? "" : `(${local})`;
    retorno = retorno.replace("&local", local);
    switch (status) {
        case "operatorio": {
            retorno = retorno.replace("&class", "class='table-warning'")
                .replace("&status", "Pré Operatório");
            break;
        }
        case "sala-cirurgia": {
            retorno = retorno.replace("&class", "class='table-danger'")
                .replace("&status", "Sala de Cirurgia");
            break;
        }
        case "recuperacao": {
            retorno = retorno.replace("&class", "class='table-success'")
                .replace("&status", "Sala de Recuperação");
            break;
        }
        case "transferido": {
            retorno = retorno.replace("&class", "class='table-primary'")
                .replace("&status", "Transferido");
            break;
        }
    }
    return retorno;
}


//editar quando o user seleciona
function editar(id) {
    document.getElementById('nome').value = pessoa[id].nome;
    document.getElementById("status").value = pessoa[id].status;
    document.getElementById("local").value = pessoa[id].local;
    document.getElementById("horaInicio").value = pessoa[id].horaInicio;
    document.getElementById("inicioPrevisto").value = pessoa[id].inicioPrevisto;
    document.getElementById("fimPrevisto").value = pessoa[id].fimPrevisto;
    document.getElementById("saidaPrevista").value = pessoa[id].saidaPrevista;
    document.getElementById("id").value = id;
}

//remover
function remover() {
    var id = document.getElementById("id").value;
    if (id == '') {
        return;
    }
    if (confirm("Você realmente deseja apagar esse registro?")) {
        pessoa.splice(id, 1);
        localStorage.setItem("pessoa", JSON.stringify(pessoa));
        atualizarTabela();
        novo();
    }
}

//registro
function novo() {
    document.getElementById("formulario").reset();
    document.getElementById("id").value = "";
}

//rodar a funcion
atualizarTabela();