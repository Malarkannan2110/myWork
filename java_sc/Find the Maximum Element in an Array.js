let arr3 = [10, 20, 4, 45, 99];
let max = arr3[0];

for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > max) {
        max = arr3[i];
    }
}

console.log("Maximum element:", max);
