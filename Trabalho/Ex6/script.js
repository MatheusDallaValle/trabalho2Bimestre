function calcularTotal() {
      const codigo = document.getElementById("codigo").value;
      const quantidade = parseInt(document.getElementById("quantidade").value);
      let preco = 0;
      let item = "";

      switch (codigo) {
        case "1":
          preco = 11.00;
          item = "Cachorro-quente";
          break;
        case "2":
          preco = 8.50;
          item = "Bauru";
          break;
        case "3":
          preco = 8.00;
          item = "Misto-quente";
          break;
        case "4":
          preco = 9.00;
          item = "Hamburger";
          break;
        case "5":
          preco = 10.00;
          item = "Cheeseburger";
          break;
        case "6":
          preco = 4.50;
          item = "Refrigerante";
          break;
      }

      const total = preco * quantidade;
      document.getElementById("resultado").innerHTML =
        `Item: ${item}<br>Quantidade: ${quantidade}<br>Total a pagar: R$ ${total}`;
    }