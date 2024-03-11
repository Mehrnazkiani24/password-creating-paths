// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (){
  var passwordlength = parseInt(prompt ("enter password length"))
  if (passwordlength<8 || passwordlength>126 || isNaN(passwordlength)){
    return "Please enter Password length between 8 and 126"
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
