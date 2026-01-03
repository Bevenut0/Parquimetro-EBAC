const tipoInput = document.getElementById("select_time");
const numberInput = document.getElementById("pagar");
const valores = [1, 1.75, 3];
let resultado;
let tipoChanged;

function trocar() {
  tipoChanged = tipoInput.value;
}

class Parquimetro {
  constructor(valor, tipo) {
    valor = valor;
    tipo = tipo;
  }

  verificar(tipo, valor) {
    if (tipo == undefined || valor == undefined || valor < 1) {
      console.log("invalidos");
      let texto = document.getElementById("texto");
      texto.innerHTML = "Argumentos Invalidos";
      texto.style.color = "red";
    }
  }

  calcularTipo(tipo, valor) {
    if (tipo == 30) {
      resultado = valor - valores[0];
      if (resultado < 0) {
        texto.innerHTML = "Valor Invalido, Pagamento Insuficiente";
        texto.style.color = "red";
      } else {
        texto.innerHTML = `Voce obteve um troco de R$${resultado} e ${tipo} minutos, Muito Obrigado`;
        texto.style.color = "white";
      }
    } else if (tipo == 60) {
      resultado = valor - valores[1];
      if (resultado < 0) {
        texto.innerHTML = "Valor Invalido, Pagamento Insuficiente";
        texto.style.color = "red";
      } else {
        texto.innerHTML = `Voce obteve um troco de R$${resultado} e ${tipo} minutos, Muito Obrigado`;

        texto.style.color = "white";
      }
    } else if (tipo == 120) {
      resultado = valor - valores[2];
      if (resultado < 0) {
        texto.innerHTML = "Valor Invalido, Pagamento Insuficiente";
        texto.style.color = "red";
      } else {
        texto.innerHTML = `Voce obteve um troco de R$${resultado} e ${tipo} minutos, Muito Obrigado`;
        texto.style.color = "white";
      }
    } else if (tipo == 0 || tipo == undefined) {
      texto.innerHTML = "Argumentos Invalidos";
      texto.style.color = "red";
      return false;
    }
  }
}

const button = document
  .getElementById("submit")
  .addEventListener("click", () => {
    const parquimetro = new Parquimetro();
    parquimetro.verificar(numberInput.value, tipoChanged);
    parquimetro.calcularTipo(tipoChanged, numberInput.value);
  });
