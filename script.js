let userInput = document.getElementById("user-input");
let userOutputs = document.querySelectorAll(".user-outputs");
let button = document.querySelector("button");

const func = (e) => {
  let output = 0;
  let count = 0;
  userOutputs.forEach((o) => {
    if (o.classList.contains("weeks")) {
      output = userInput.value * 52;
    } else if (o.classList.contains("hours")) {
      output = userInput.value * 8760;
    } else if (o.classList.contains("days")) {
      output = userInput.value * 365;
    }
    o.innerHTML = output;
  });
};

button.addEventListener("click", func);
