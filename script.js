function factorial(num) {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

function calcularFactorial() {
  let numero;
  while (true) {
    numero = prompt("Introduce un número:");
    if (numero === null) {
      alert("Operación cancelada. Debes ingresar un número.");
      return;
    }
    numero = parseFloat(numero);
    if (!isNaN(numero)) {
      break;
    }
    alert("Error: Ingresa un número válido.");
  }

  const resultadoElement = document.getElementById("resultado");
  const resultado = factorial(numero);
  resultadoElement.textContent = `El factorial de ${numero} es ${resultado}`;
}
