let str = "12345";
let onlyDigits = true;

for (let i = 0; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') {
        onlyDigits = false;
        break;
    }
}

console.log("Contains only digits?", onlyDigits);
