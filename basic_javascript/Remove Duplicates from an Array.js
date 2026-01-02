function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        console.log("Invalid input: Please provide an array.");
        return null;
    }

    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let exists = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

// Example
console.log("Array without duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
