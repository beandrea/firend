// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var charNum = prompt("How log do you want you password?").trim();
    while(isNaN(charNum) || charNum < 0){
        charNum = prompt("Only enter a positive, valid integer").trim();
    }

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