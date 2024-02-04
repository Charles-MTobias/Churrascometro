/*
Carne - 400 gr por pessoa   + de 4 horas - 650
Cerveja - 1200 ml por Pessoa + 4 horas - 2000 ml
Refrigerante/agua - 1000 ml por pessoa + 4 horas 1500ml

Crianças valem por 0,5
*/

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado')

function calc(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdcarne = adultos * canrPP(duracao) + criancas * canrPP(duracao)/2;
    
    let qtdcerveja = adultos * cervejaPP(duracao);

    let qtdrefri = adultos * refriPP(duracao) + criancas * refriPP(duracao);

    resultado.innerHTML = `<h3> Quantidades necessárias para o seu churrasco</h3>`
    resultado.innerHTML += `<p> ${qtdcarne /1000} kg total de carne</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdcerveja /250)} Latas de cerveja</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdrefri /2000)} Garrafas de refrigerante e agua</p>`
}

function canrPP(duracao){
    if (duracao <= 4){
        return 400;
    } else {
        return 650;
    }
}

function cervejaPP(duracao){
    if (duracao <= 4){
        return 1200;
    } else {
        return 2000;
    }
}

function refriPP(duracao){
    if(duracao <= 4){
        return 1000;
    } else{
        return 1500;
    }
}