let text4 = "hello world";
let upperText = "";

for (let i = 0; i < text4.length; i++) {
    let code = text4.charCodeAt(i);
    if (code >= 97 && code <= 122) { // Lowercase a-z
        upperText += String.fromCharCode(code - 32);
    } else {
        upperText += text4[i];
    }
}

console.log("Uppercase:", upperText);
