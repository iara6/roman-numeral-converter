const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");


const checkInput = () => {
  const value = Number(inputNumber.value);

  if (inputNumber.value === '') {
    output.textContent = "Please enter a valid number";
    return;
  }

  if (value === -1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (value > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  output.textContent = romanConverter(value);
  inputNumber.value = '';
}

convertBtn.addEventListener("click", checkInput);

