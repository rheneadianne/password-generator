// Assignment code here
var generateBtn = document.querySelector("#generate");

const generatePassword = () => {

const choiceLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const choiceUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]"];

let finalPasswordArray = [];
let makePassword = []

const lengthOfPassword = prompt ("Between 8 to 128, please enter how long you want your password to be");
if (lengthOfPassword < 8 || lengthOfPassword > 128) {
  alert("Please enter a number between 8 and 128.");
  return
}
const ifNumbers = confirm ("Would you like numbers characters in your password?");
const ifLower = confirm ("Would you like lowercase characters in your password?");
const ifUpper = confirm ("Would you like upppercase characters in your password?");
const ifSpecial = confirm ("Would you like special characters in your password?");

if (!ifNumbers && !ifLower && !ifUpper && !ifSpecial){
  alert("Please select at least one parameter!");
  return
}

if (ifNumbers){
  finalPasswordArray = finalPasswordArray.concat(numbers);
}

if (ifLower){
  finalPasswordArray = finalPasswordArray.concat(choiceLowercase);
}

if (ifUpper){
  finalPasswordArray = finalPasswordArray.concat(choiceUppercase);
}

if (ifSpecial){
  finalPasswordArray = finalPasswordArray.concat(symbols);
}

for (i = 0; i < lengthOfPassword; i++) {    
  makePassword.push(finalPasswordArray [Math.floor(Math.random() * finalPasswordArray.length)]); 
} return makePassword.join("")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
