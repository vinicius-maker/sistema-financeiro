const valor_total = 300000; // valor total
const prazo_anual = 20; // tempo em anos
const juros_anual = 0.08; // juros anual
const prazo_mensal = prazo_anual * 12;
const juros_mensal = Math.pow(1 + juros_anual, 1 / 12) - 1;
const valor_mensal_fixo = valor_total / prazo_mensal;

console.log('Juros mensal:' + juros_mensal);
console.log('Prazo:' + prazo_mensal + ' meses');

let parcelas = [];
let valor_aberto = valor_total; // valor_aberto = 300000

for (let i = 0; i < prazo_mensal; i++) {
  
  let juros = valor_aberto * juros_mensal; // juros = valor_aberto = 300000 * juros_mensal = 0.00643403 = 1930,20
  let parcela_mensal = valor_mensal_fixo + juros; // parcela_mensal = valor_mensal_fixo = 1250 + juros = 1930,20 = 3180,20
  valor_aberto -= valor_mensal_fixo; // valor_aberto = 300000 -= valor_mensal_fixo = 1250 = 298.750

  let line = {
    amortizacao: valor_mensal_fixo.toFixed(2),
    juros: juros.toFixed(2),
    total: parcela_mensal.toFixed(2)
  };
  parcelas.push(line);
}

console.table(parcelas);
