let arr15 = [1, 2, 3, 2, 4, 5, 1, 6];
let duplicates = [];

for (let i = 0; i < arr15.length; i++) {
    for (let j = i + 1; j < arr15.length; j++) {
        if (arr15[i] === arr15[j] && duplicates.indexOf(arr15[i]) === -1) {
            duplicates.push(arr15[i]);
        }
    }
}

console.log("Duplicate elements:", duplicates);
