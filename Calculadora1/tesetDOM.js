function nove() {
    let nove = document.querySelector("#nove").innerText;
    document.querySelector("#input").value += nove;
}

function oito() {
    let oito = document.querySelector("#oito").innerText;
    document.querySelector("#input").value += oito;
}

function sete() {
    let input = documento.getElementById('input');
    if (input.className === 'soma') {
        input.value = ''
        input.className = ""
    }
    let sete = document.querySelector("#sete").innerText;
    document.querySelector("#input").value += sete;
}

function seis() {
    let seis = document.querySelector("#seis").innerText;
    document.querySelector("#input").value += seis;
}

function cinco() {
    let cinco = document.querySelector("#cinco").innerText;
    document.querySelector("#input").value += cinco;
}

function quatro() {
    let quatro = document.querySelector("#quatro").innerText;
    document.querySelector("#input").value += quatro;
}

function tres() {
    let tres = document.querySelector("#tres").innerText;
    document.querySelector("#input").value += tres;
}

function dois() {
    let dois = document.querySelector("#dois").innerText;
    document.querySelector("#input").value += dois;
}

function um() {
    let um = document.querySelector("#um").innerText;
    document.querySelector("#input").value += um;
}

function zero() {
    let zero = document.querySelector("#zero").innerText;
    document.querySelector("#input").value += zero;
}

function ponto() {
    let ponto = document.querySelector("#ponto").innerText;
    document.querySelector("#input").value += ponto;
}

function c() {
    document.querySelector("#input").value = "";
    resultado = 0
}

function soma() {
    let input = documento.getElementById('input');
    input.className = 'soma'
    let valor = Number(document.querySelector("#input").value);
    resultado += valor;
    document.querySelector("#input").value = resultado;
    console.log(resultado);
}

function subtrai() {
    let valor = Number(document.querySelector("#input").value);
    resultado -= valor;
    document.querySelector("#input").value = "";
    console.log(resultado);
}

function multiplica() {
    let valor = Number(document.querySelector("#input").value);
    resultado *= valor;
    document.querySelector("#input").value = "";
    console.log(resultado);
}

function divide() {
    let valor = Number(document.querySelector("#input").value);
    resultado /= valor;
    document.querySelector("#input").value = "";
    console.log(resultado);
}

function igualdade() {
    document.querySelector("#input").value = resultado;
}

let resultado = 0;


function numero9() {
    let input = documento.getElmementsById('input');
    if (input.className === 'soma') {
        input.value = ''
        input.className = ""
    }
}



function soma() {
    let input = documento.getElmementsById('input');
    input.className = 'soma'
}