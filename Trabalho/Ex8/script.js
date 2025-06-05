function calcularSalario() {
      const nivel = document.getElementById("nivel").value;
      const horas = parseFloat(document.getElementById("horas").value);

      let valorHora = 0;

      switch (nivel) {
        case "1":
          valorHora = 12.00;
          break;
        case "2":
          valorHora = 17.00;
          break;
        case "3":
          valorHora = 25.00;
          break;
        default:
          document.getElementById("resultado").innerText = "Nível inválido.";
          return;
      }

      const salario = valorHora * horas * 4.5;
      document.getElementById("resultado").innerText = 
        `Salário mensal: R$ ${salario.toFixed(2)}`;
    }