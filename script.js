// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getPasswordOptions() {
  var length = parseInt(
    prompt("Enter a numeric value for password length 8-128")
  );

  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number.");
  }

  if (length < 8) {
    alert("Password length provided must be greater than 8 characters");
    return null;
  }

  if (length > 128) {
    alert("Password length provided must be less than 128 characters");
    return null;
  }

  var hasSpecialCharacters = confirm(
    "Click OK to confirm using special characters."
  );

  var hasNumericCharacters = confirm(
    "Click OK to confirm using numeric characters."
  );

  var hasLowercaseCharacters = confirm(
    "Click OK to confirm using Lowercase characters."
  );

  var hasUppercaseCharacters = confirm(
    "Click OK to confirm using Uppercase characters."
  );

  if (
    hasSpecialCharacters === false &&
    hasLowercaseCharacters === false &&
    hasUppercaseCharacters === false &&
    hasNumericCharacters == false
  ) {
    alert("Must select atleast one character type");
    return null;
  }

  var passwordOptions = {
    length: length,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Selects a random index based off of the length of the passed array
  var randIndex = Math.floor(Math.random() * arr.length);
  // Assign the value of the element at index randIndex to randElement
  var randElement = arr[randIndex];
  // Return this element
  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  // Check to make sure options object exists
  if (!options) {
    return null;
  }

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for(var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for(var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
