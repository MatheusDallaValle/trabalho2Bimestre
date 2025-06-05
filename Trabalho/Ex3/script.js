function calcularImpostos(){
    const ano = Number(document.getElementById('ano').value);
    const valor = Number(document.getElementById('valor').value);
    const resultado = document.getElementById('resultado');

    let taxa = 0;

    if (ano < 1990) {
        taxa = 0.01;
    } else {
        taxa = 0.015;
    }

    const imposto = valor * taxa;

    resultado.innerText = `O imposto a ser pago é R$ ${imposto.toFixed(2)}`
}
