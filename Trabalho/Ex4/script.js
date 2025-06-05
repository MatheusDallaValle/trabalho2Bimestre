function calcularReajuste() {
    const salario = Number(document.getElementById('salario').value);
    const cargo = document.getElementById('cargo').value.trim().toLowerCase();
    const resultado = document.getElementById('resultado');

    let percentual = 0;

    if (cargo === "gerente") {
        percentual = 0.10;
    } else if (cargo === "engenheiro") {
        percentual = 0.20;
    } else if (cargo === "tecnico") {
        percentual = 0.30;
    } else {
        percentual = 0.40;
    }

    const aumento = salario * percentual;
    const novoSalario = salario + aumento;

    resultado.innerHTML = `
        Salário antigo: R$ ${salario.toFixed(2)}<br>
        Novo salário: R$ ${novoSalario.toFixed(2)}<br>
        Aumento: R$ ${aumento.toFixed(2)} (${(percentual * 100)}%)
    `;
}