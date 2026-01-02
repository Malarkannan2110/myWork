let arr4 = [12, 45, 7, 89, 23];
let min = arr4[0];

for (let i = 1; i < arr4.length; i++) {
    if (arr4[i] < min) {
        min = arr4[i];
    }
}

console.log("Minimum number:", min);
