const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
console.log(nameInput);
console.log(nameOutput);



nameInput.addEventListener("input", handlerOptions);


function handlerOptions(input) {
    const trimmed = input.target.value.trim();
    nameOutput.textContent = trimmed === "" ? "Anonymous" : trimmed;
  


}

