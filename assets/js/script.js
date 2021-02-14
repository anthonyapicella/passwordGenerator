// Assignment Code
var generateBtn = document.querySelector("#generate");

// Available characters for password
var numbers = "1234567890".split("");
var lowcase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var speChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
var logicArr = [];
var finalArr = [];

// User interaction 

var passNums = confirm("Would you like your password contain numbers?");
var passLower = confirm("Should your password contain lowercase letters?");
var passUpper = confirm("Will your password contain UPPERCASE letters?");
var passSpec = confirm("And how about some special characters??");
var passwordLength = prompt("How many characters would you like your password to contain?");
 
// create conditional to pass response to logicArr

var num = [Math.floor(Math.random()*numbers.length)];



console.log(num)
console.log(passNums);
// console.log(passLower);
// console.log(passUpper);
// console.log(passSpec);
// console.log(passwordLength);
// console.log(num);

alert.passwordLength;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

