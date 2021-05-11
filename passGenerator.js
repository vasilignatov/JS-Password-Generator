const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeCharactersElement = document.getElementById('includeSymbols');

const UPPERCASE_CHAR_CODES = arrarFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrarFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrarFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrarFromLowToHigh(33, 47)
    .concat(arrarFromLowToHigh(58,64))
    .concat(arrarFromLowToHigh(91,96))
    .concat(arrarFromLowToHigh(123,126));

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}

form.addEventListener('submit', e =>{
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeCharactersElement.checked;
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);

    passwordDisplay.textContent = password;
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

    const passwordCharacters = [];
    for(let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}

function arrarFromLowToHigh(low, high) {
    const result = [];
    for(let i = low; i <= high; i++) {
        result.push(i);
    }
    return result;
}