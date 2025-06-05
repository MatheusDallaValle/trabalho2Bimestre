function calcularCredito() {
    const saldo = Number(document.getElementById('saldo').value);
    const resultado = document.getElementById('resultado');

    let percentual = 0;

    if (saldo >= 0 && saldo <= 200) {
        percentual = 0;
    } else if (saldo >= 201 && saldo <= 400) {
        percentual = 0.20;
    } else if (saldo >= 401 && saldo <= 600) {
        percentual = 0.30;
    } else if (saldo > 600) {
        percentual = 0.40;
    }

    const credito = saldo * percentual;

    if (percentual === 0) {
        resultado.innerHTML = `
            Saldo médio: R$ ${saldo.toFixed(2)}<br>
            Você não tem direito a crédito especial.
        `;
    } else {
        resultado.innerHTML = `
            Saldo médio: R$ ${saldo.toFixed(2)}<br>
            Você tem direito a um crédito de R$ ${credito.toFixed(2)} (${percentual * 100}% do saldo).
        `;
    }
}