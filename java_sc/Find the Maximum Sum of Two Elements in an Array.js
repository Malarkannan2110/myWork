let arr = [10, 20, 4, 45, 99];
let max1 = -Infinity, max2 = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
        max2 = max1;
        max1 = arr[i];
    } else if (arr[i] > max2) {
        max2 = arr[i];
    }
}

console.log("Max sum of two elements:", max1 + max2);
