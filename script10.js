
function convert() {
  let n = parseFloat(document.getElementById("value").value);
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let result;

  if (isNaN(n)) {
    result = "Enter a valid number!";
  } else if (from === to) {
    result = n;
  } else if (from === "Meter" && to === "Kilometer") {
    result = n / 1000;
  } else if (from === "Kilometer" && to === "Meter") {
    result = n * 1000;
  } else if (from === "Meter" && to === "Centimeter") {
    result = n * 100;
  } else if (from === "Centimeter" && to === "Meter") {
    result = n / 100;
  } else if (from === "Kilogram" && to === "Gram") {
    result = n * 1000;
  } else if (from === "Gram" && to === "Kilogram") {
    result = n / 1000;
  } else if (from === "Celsius" && to === "Fahrenheit") {
    result = (n * 9 / 5) + 32;
  } else if (from === "Fahrenheit" && to === "Celsius") {
    result = (n - 32) * 5 / 9;
  } else {
    result = "Conversion not supported!";
  }

  document.getElementById("result").innerText =
    "Result: " + result;
}
