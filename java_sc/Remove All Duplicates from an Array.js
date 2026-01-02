let arr4 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

for (let i = 0; i < arr4.length; i++) {
    if (uniqueArr.indexOf(arr4[i]) === -1) {
        uniqueArr.push(arr4[i]);
    }
}

console.log("Array without duplicates:", uniqueArr);
