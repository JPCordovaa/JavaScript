function convertorDolarReal(valorEmDolar){
    let cotacaoDolar = 4.8;
    let valorEmReal = ValorEmDolar * cotacaoDolar;
    return valorEmReal.toFixed(2);
}

console.log(`${valorEmDolar} dólares, equivalem a ${valorEmReal} reais.`);