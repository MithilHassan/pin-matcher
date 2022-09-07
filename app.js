function generatePin() {
  const pin = Math.floor(Math.random() * 9000 + 1000);
  printPin(pin);
}

function getPin() {
  return document.getElementById("pin").value;
}

function printPin(pin) {
  return (document.getElementById("pin").value = pin);
}

function getOutput() {
  return document.getElementById("output").value;
}

function printOutput(num) {
  document.getElementById("output").value = num;
}

function clearOutput() {
  printOutput("");
}

function undoOutput() {
  let output = getOutput();
  output = output.substring(0, output.length - 1);
  printOutput(output);
}

const numbers = document.getElementsByClassName("button");

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  number.addEventListener("click", function () {
    let output = getOutput();
    if (output != NaN) {
      output = output + number.id;
      printOutput(output);
    }
  });
}

const matched = document.getElementById("matched");
const notMatched = document.getElementById("notMatched");
function notifyMatched() {
  matched.style.display = "block";
  notMatched.style.display = "none";
}
function notifyNotMatched() {
  notMatched.style.display = "block";
  matched.style.display = "none";
}

function handlePinMatch() {
  const pin = getPin();
  const output = getOutput();
  if (pin == output) {
    notifyMatched();
    printOutput("");
    printPin("");
  } else {
    notifyNotMatched();
  }
}
