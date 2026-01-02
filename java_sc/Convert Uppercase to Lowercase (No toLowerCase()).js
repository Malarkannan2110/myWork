let text3 = "HELLO WORLD";
let lowerText = "";

for (let i = 0; i < text3.length; i++) {
    let code = text3.charCodeAt(i);
    if (code >= 65 && code <= 90) { // Uppercase A-Z
        lowerText += String.fromCharCode(code + 32);
    } else {
        lowerText += text3[i];
    }
}

console.log("Lowercase:", lowerText);
