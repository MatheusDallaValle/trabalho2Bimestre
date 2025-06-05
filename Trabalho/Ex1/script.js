function verificarTriangulo() {
    const lado1 = Number(document.getElementById('tamanho1').value);
    const lado2 = Number(document.getElementById('tamanho2').value);
    const lado3 = Number(document.getElementById('tamanho3').value);
    const resultado = document.getElementById('resultado');

    if (lado1 === lado2 && lado2 === lado3) {
        resultado.innerText = "Triângulo Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        resultado.innerText = "Triângulo Isósceles";
    } else {
        resultado.innerText = "Triângulo Escaleno";
}
}    