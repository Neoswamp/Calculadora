let calculated = false;
let result = document.getElementById("result");
let hasCalculated = false;

function addToResult(value) {
  let currentValue = result.innerHTML;
  let decimalIndex = currentValue.indexOf(".");

  if (currentValue === "0" && !isNaN(value) && value !== "0" && !currentValue.includes(".")) {
    result.innerHTML = value;
  } else if (currentValue === "0" && value === "0") {
    // No se hace nada si el valor es 0
  } else if (
    currentValue.length === 1 &&
    currentValue.charAt(0) === "0" &&
    !currentValue.includes(".") &&
    value !== "/" &&
    value !== "+" &&
    value !== "-" &&
    value !== "*" &&
    value !== "."
  ) {
    result.innerHTML = value;
  } else {
    result.innerHTML += value;
  }

  if (hasCalculated) {
    result.innerHTML = value;
    hasCalculated = false;
  }

  calculated = false;
}

function clearResult() {
  result.innerHTML = "0";
}

function deleteLastDigit() {
  let currentValue = result.innerHTML;
  if (currentValue.length === 1) {
    result.innerHTML = "0";
  } else {
    result.innerHTML = currentValue.slice(0, -1);
  }
}

function calculateResult() {
  if (!calculated) {
    try {
      result.innerHTML = eval(result.innerHTML);
      calculated = true;
      hasCalculated = true;
    } catch (error) {
      alert("Error en la expresión");
      result.innerHTML = "0";
    }
  }
}
