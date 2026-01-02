let str3 = "madam";
let reversed = "";

for (let i = str3.length - 1; i >= 0; i--) {
    reversed += str3[i];
}

console.log(str3, "is palindrome?", str3 === reversed);
