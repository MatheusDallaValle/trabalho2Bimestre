
function calcular(){
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let resultado = document.getElementById('resultado')
    let imc = peso / altura ** 2
    imcArredondado = imc.toFixed(2)
    if(imc < 18.5){
        resultado.innerText = `seu imc é ${imcArredondado}, entao voce esta abaixo do peso`
    }else if(imc <= 24.9){
        resultado.innerText = `seu imc é ${imcArredondado}, entao voce esta no peso normal`
    }else if(imc <= 29.9){
        resultado.innerText = `seu imc é ${imcArredondado}, entao voce tem sobrepeso`
    }else if(imc <= 34.9){
        resultado.innerText = `seu imc é ${imcArredondado}, entao voce tem obesidade grau 1`
    }else if(imc <= 39.9){
        resultado.innerText = `seu imc é ${imcArredondado}, entao voce tem obesidade grau 2`
    }else{
        resultado.innerText = `seu imc é ${imcArredondado}, entao voce tem obesidade grau 3`
    }
}
