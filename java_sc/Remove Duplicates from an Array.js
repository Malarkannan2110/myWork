let arr3 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

for (let i = 0; i < arr3.length; i++) {
    let exists = false;
    for (let j = 0; j < uniqueArr.length; j++) {
        if (arr3[i] === uniqueArr[j]) {
            exists = true;
            break;
        }
    }
    if (!exists) {
        uniqueArr.push(arr3[i]);
    }
}

console.log("Array without duplicates:", uniqueArr);
