// Assignment Code
var generateBtn = document.querySelector("#generate");

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z"];

var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var alphaNum = [alpha, num];

function generatePassword() {
    var securePas = "";
    for (var i = 0; i < 10; i++) {
        var let = alphaNum[Math.floor(Math.random() * 2)];
        if (let == alpha) {
            securePas += alpha[Math.floor(Math.random() * alpha.length)];
        } else {
            securePas += num[Math.floor(Math.random() * num.length)];
        }
    }
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