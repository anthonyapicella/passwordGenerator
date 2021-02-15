// Assignment Code
var generateBtn = document.querySelector("#generate");

// Available characters for password

var numbersArr = ["1","2","3","4","5","6","7","8","9","0"];
var lowCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialArr = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}"];

// temporary array to store choices

var logicArr = [];

// final array to store password

var finalArr = [];


// Create a function that when invoked by button press, executes our code prompting the user for their choices

function generatePassword() {
  // ask user desired length of password
  // ensure user selects a number between 8 and 24 then store that value in password length
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must select a number between 8 and 128 characters");
  }
  // ask user if they would like the password to contain numbers, if true push numbers to logicArr array
  var numberChoice = confirm("Would you like your password contain numbers?");
  if (numberChoice) {
    for (var i = 0; i < numbersArr.length; i++) {
      logicArr.push(numbersArr[i])
    }
  }
  // ask user if they would like password to contain numbers, if true push to array
  var lowerChoice = confirm("Should your password contain lowercase letters?");
  if (lowerChoice) {
    for (var i = 0; i < lowCaseArr.length; i++) {
      logicArr.push(lowCaseArr[i])
    }
  }
  // ask user to confirm UPPER CASE letters, if true push to array
  var upperChoice = confirm("Will your password contain UPPERCASE letters?");
  if (upperChoice) {
    for (var i = 0; i < uppCaseArr.length; i++) {
      logicArr.push(uppCaseArr[i])
    }
  }
  // ask user to confirm special characters, if true push to array
  var specialChoice = confirm ("And how about some special characters??"); 
  if (specialChoice) {
    for (var i = 0; i < specialArr.length; i++) {
      logicArr.push(specialArr[i])
    }
  }

  /* write a for loop that will iterate through logicArr and then use Math.random to push character 
  strings to final array based on limit set by user in passwordLength using .length*/
  for (var i = 0; i < passwordLength; i++) {
    finalArr.push(logicArr[Math.floor(Math.random() * logicArr.length)]);
  }
  
  // join into one array
  return finalArr.join(" ");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);