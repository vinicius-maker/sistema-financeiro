let valor = document.getElementById('valor')
let prazo = document.getElementById('prazo')
let juros = document.getElementById('juros')
let resultadoPrazo = document.getElementById('resultadoPrazo')
let resultadoJurosMes = document.getElementById('resultadoJurosMes')
let resultadoJurosAcumulados = document.getElementById('resultadoJurosAcumulados')
let amortizacao = document.getElementById('amortizacao')
let botao = document.getElementById('botao')

function calculaPrazo(){
    let resultado = prazo.valueAsNumber * 12
    if(isNaN(resultado)){
        return resultadoPrazo.textContent = ''
    } else{
        return resultadoPrazo.textContent = resultado
    }
}

function calculaJuros(){
    let jurosMeses = Math.pow(1 + juros.valueAsNumber, 1/12) - 1
    return resultadoJurosMes.textContent = jurosMeses . toFixed(8)
}

function calculaJurosAcumulados(){
    var jurosAcm = 0
    let numPrestacoes = prazo.valueAsNumber * 12
    let valorTotal = valor.valueAsNumber
    let amortizacao = valorTotal / numPrestacoes
    let jurosMensais = Math.pow(1 + juros.valueAsNumber, 1/12) - 1

    for (var i = 0; i < numPrestacoes; i++){
        var jurosAcumulados = (((valorTotal) - (amortizacao * i)) * jurosMensais)
        jurosAcm = jurosAcumulados + jurosAcm
    }
    return resultadoJurosAcumulados.textContent = jurosAcm . toFixed(2)
}

function calculaAmortizacao(){
    let valorTotal = valor.valueAsNumber
    let numPrestacoes = prazo.valueAsNumber * 12
    let resultado = valorTotal / numPrestacoes
    return amortizacao.textContent = resultado . toFixed(2)
}


