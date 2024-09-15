const passwordBox = document.getElementById("password");
const passwordLength = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    // Ensuring at least one character from each category
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Filling the rest of the password with random characters
    while(password.length < passwordLength){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Setting the generated password to the input field
    passwordBox.value = password;
}
createPassword();
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
