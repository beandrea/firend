// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var securePas = "";
    for (var i = 0; i < 10; i++) {
        securePas += String.fromCharCode(Math.random() * (126 - 33) + 33);
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);