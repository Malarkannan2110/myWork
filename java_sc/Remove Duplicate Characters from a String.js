let str3 = "programming";
let uniqueStr = "";

for (let i = 0; i < str3.length; i++) {
    if (uniqueStr.indexOf(str3[i]) === -1) {
        uniqueStr += str3[i];
    }
}

console.log("String without duplicates:", uniqueStr);
