let arr6 = [5, 2, 9, 1, 5, 6];

for (let i = 0; i < arr6.length; i++) {
    for (let j = i + 1; j < arr6.length; j++) {
        if (arr6[i] < arr6[j]) {
            let temp = arr6[i];
            arr6[i] = arr6[j];
            arr6[j] = temp;
        }
    }
}

console.log("Sorted array (descending):", arr6);
