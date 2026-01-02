let str = "programming";
let firstUnique = null;

for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
            count++;
        }
    }
    if (count === 1) { // Found first unique character
        firstUnique = str[i];
        break;
    }
}

if (firstUnique !== null) {
    console.log("First non-repeating character:", firstUnique);
} else {
    console.log("No unique character found");
}
//First non-repeating character: p
