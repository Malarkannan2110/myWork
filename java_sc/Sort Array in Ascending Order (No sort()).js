let arr5 = [5, 2, 9, 1, 5, 6];

for (let i = 0; i < arr5.length; i++) {
    for (let j = i + 1; j < arr5.length; j++) {
        if (arr5[i] > arr5[j]) {
            let temp = arr5[i];
            arr5[i] = arr5[j];
            arr5[j] = temp;
        }
    }
}

console.log("Sorted array:", arr5);
