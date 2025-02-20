const input = document.getElementById("input-data");
const output = document.getElementById("output");
const btn = document.getElementById("btn");

function myFunction() {
  output.style.backgroundColor = input.value;
}

btn.addEventListener("click", myFunction);
