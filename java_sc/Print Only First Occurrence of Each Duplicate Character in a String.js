let str = "programming";
let printed = [];

for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j] && printed.indexOf(str[i]) === -1) {
            console.log("First duplicate character:", str[i]);
            printed.push(str[i]);
            break; // Move to next character after first duplicate found
        }
    }
}
