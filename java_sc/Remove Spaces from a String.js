let text2 = "Java Script   is   cool";
let noSpaces = "";

for (let i = 0; i < text2.length; i++) {
    if (text2[i] !== " ") {
        noSpaces += text2[i];
    }
}

console.log("String without spaces:", noSpaces);
