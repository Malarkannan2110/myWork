let arr2 = [10, 20, 4, 45, 99];
let min = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < min) {
        min = arr2[i];
    }
}

console.log("Minimum element:", min);
