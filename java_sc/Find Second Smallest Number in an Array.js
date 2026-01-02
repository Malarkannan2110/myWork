let arr2 = [10, 20, 4, 45, 99];
let smallest = Infinity, secondSmallest = Infinity;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr2[i];
    } else if (arr2[i] < secondSmallest && arr2[i] !== smallest) {
        secondSmallest = arr2[i];
    }
}

console.log("Second smallest number:", secondSmallest);
