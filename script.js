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
  var yesUpperCase = confirm("Do you like uppercase letters in your password")
  var yesLowerCase = confirm("Do you like lowercase letters in your password")
  var yesSnumbers = confirm("Do you like numbers in your password")
  var yesSpecialcharactors = confirm("Do you like to have special charactors in your password")

  if(!yesLowerCase && !yesSnumbers && !yesUpperCase &&!yesSpecialcharactors){
    return "Please choose at least one option"
  }

  var validPasswords =""

  if(yesLowerCase){
    validPasswords += "abcdefghijklmnopqrstuvwxyz"
  }
  if(yesUpperCase){
    validPasswords += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(yesSnumbers){
    validPasswords += "0123456789"
  }
  if(yesSpecialcharactors){
    validPasswords += "!#@$%^&*~_-"
  }
  console.log (validPasswords)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
