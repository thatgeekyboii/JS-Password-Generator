const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const passwordGeneratorForm = document.getElementById('passwordGeneratorForm');
const includeUpperCaseElement = document.getElementById('includeUpperCase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const passwordDisplay = document.getElementById('passwordDisplay');



const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
);

characterAmountNumber.addEventListener('input',syncCharacterAmount);
characterAmountRange.addEventListener('input',syncCharacterAmount);

passwordGeneratorForm.addEventListener('submit', e => {
    e.preventDefault(); // prevents the refreshing after clikcing the button
    const characterAmount = characterAmountNumber.value; // getting character amount value
    const includeUpperCase = includeUpperCaseElement.checked; // returns true or false if the button is checked or not
    const includeNumbers = includeNumbersElement.checked; // returns tue or false if checked
    const includeSymbols = includeSymbolsElement.checked;
    
    //password generator function
    const password = generatePassword(characterAmount,includeUpperCase,includeNumbers,includeSymbols)
    passwordDisplay.innerText = password

})

// password generator function using character codes
    function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
        let charCodes = LOWERCASE_CHAR_CODES
        if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
        if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
        if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
        
        const passwordCharacters = []
        for (let i = 0; i < characterAmount; i++) {
          const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
          passwordCharacters.push(String.fromCharCode(characterCode))
        }
        return passwordCharacters.join('')
      }


function syncCharacterAmount(e){
    // linking the slider and the number input 
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }