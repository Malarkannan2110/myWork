let arr2 = [12, 45, 7, 89, 23];
let largestNum = arr2[0];
let secondLargest = -Infinity;

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > largestNum) {
        secondLargest = largestNum;
        largestNum = arr2[i];
    } else if (arr2[i] > secondLargest && arr2[i] !== largestNum) {
        secondLargest = arr2[i];
    }
}

console.log("Second largest number:", secondLargest);
