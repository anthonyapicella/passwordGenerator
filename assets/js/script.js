// Assignment Code
var generateBtn = document.querySelector("#generate");

// Available characters for password

var numbersArr = ["1","2","3","4","5","6","7","8","9","0"];
var lowCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialArr = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}"];

var logicArr = [];
var finalArr = [];



function generatePassword() {

}


// ask user desired length of password

var passwordLength = prompt("How many characters would you like your password to contain?");

// ensure user selects a number between 8 and 24 then store that value in password length

if (passwordLength < 8 || passwordLength > 24) {
  passwordLength = prompt("You must select a number between 8 and 24 characters");

}

// ask user if they would like the password to contain numbers, then push numbers to logicArr array

var numberChoice = confirm("Would you like your password contain numbers?");

if (numberChoice) {
  for (var i = 0; i < numbersArr.length; i++) {
    logicArr.push(numbersArr[i])
  }
}



console.log(logicArr);


alert.passwordLength;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

