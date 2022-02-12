const valor_total = document.getElementById('valor'); 
const prazo_anual = document.getElementById('prazo'); 
const juros_anual = document.getElementById('juros'); 
const prazo_mensal = prazo_anual * 12;
const juros_mensal = Math.pow(1 + juros_anual, 1 / 12) - 1;
const valor_mensal_fixo = valor_total / prazo_mensal;

function simular(){
    if(isNaN(resultado)){
        return resultadoPrazo.textContent = ''
    } else{
        return resultadoPrazo.textContent = resultado
    }
}

let parcelas = [];
let valor_aberto = valor_total;

for (let i = 0; i < prazo_mensal; i++) {

  let juros = valor_aberto * juros_mensal;
  let parcela_mensal = valor_mensal_fixo + juros;

  valor_aberto -= valor_mensal_fixo;

  let line = {
    amortizacao: valor_mensal_fixo.toFixed(2),
    juros: juros.toFixed(2),
    total: parcela_mensal.toFixed(2)
  };

  parcelas.push(line);
}

