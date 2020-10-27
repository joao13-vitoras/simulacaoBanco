let saldo = prompt('Digite seu saldo:')
let preco = prompt('Valor da compra:')
parseFloat(saldo)
parseFloat(preco)
let saldoFinal = saldo - preco

if (saldoFinal >= 0) {
        alert('Compra finalizada');
        alert(`Saldo final R$ ${saldoFinal}`);
}   else if (saldoFinal < 0) {
        alert('Saldo insuficiente');
}   else {
        alert('Algo de errado ocorreu')
}



