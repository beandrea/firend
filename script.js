// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var securePas = "";
    for (var i = 0; i < 10; i++) {
        securePas += String.fromCharCode(Math.floor(35 + Math.random() * 91));
    }
    console.log(securePas);
    return securePas;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);