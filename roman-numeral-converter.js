const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function convertToRoman(number) {
  const romanNumerals = [
    { roman: 'M', arabic: 1000 },
    { roman: 'CM', arabic: 900 },
    { roman: 'D', arabic: 500 },
    { roman: 'C', arabic: 100 },
    { roman: 'XC', arabic: 90 },
    { roman: 'L', arabic: 50 },
    { roman: 'XL', arabic: 40 },
    { roman: 'X', arabic: 10 },
    { roman: 'IX', arabic: 9 },
    { roman: 'V', arabic: 5 },
    { roman: 'IV', arabic: 4 },
    { roman: 'I', arabic: 1 }
  ];

 let result = '';

 for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].arabic) {
      result += romanNumerals[i].roman;
      number -= romanNumerals[i].arabic;
    }
 }
 return result;

};


const checkInput = () => {
  const value = parseInt(inputNumber.value);

  if (inputNumber.value === '' || isNaN(value)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  if (value < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (value > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  output.textContent = convertToRoman(value);
  inputNumber.value = '';
};


convertBtn.addEventListener("click", checkInput);

inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});