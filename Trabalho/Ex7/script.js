function calcularVenda() {
      const preco = parseFloat(document.getElementById("preco").value);
      const condicao = document.getElementById("condicao").value;
      let total = 0;
      let mensagem = "";

      switch (condicao) {
        case "a":
          total = preco * 0.90;
          mensagem = "À vista em dinheiro/cheque (10% de desconto)";
          break;
        case "b":
          total = preco * 0.85;
          mensagem = "À vista no cartão (15% de desconto)";
          break;
        case "c":
          total = preco;
          mensagem = "Em 2x sem juros (preço normal)";
          break;
        case "d":
          total = preco * 1.10;
          mensagem = "Em 2x com 10% de juros";
          break;
      }

      const parcela = (condicao === "c" || condicao === "d") ? ` ou 2x de R$ ${(total / 2).toFixed(2)}` : "";

      document.getElementById("resultado").innerHTML =
        `Condição: ${mensagem}<br>Total a pagar: R$ ${total.toFixed(2)}${parcela}`;
    }