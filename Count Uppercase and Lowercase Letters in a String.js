let text = "Hello World";
let upperCount = 0, lowerCount = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] >= 'A' && text[i] <= 'Z') {
        upperCount++;
    } else if (text[i] >= 'a' && text[i] <= 'z') {
        lowerCount++;
    }
}

console.log("Uppercase:", upperCount, "Lowercase:", lowerCount);
