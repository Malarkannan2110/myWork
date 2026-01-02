let arr10 = [1, 2, 3, 4];
let arr11 = [3, 4, 5, 6];
let intersection = [];

for (let i = 0; i < arr10.length; i++) {
    for (let j = 0; j < arr11.length; j++) {
        if (arr10[i] === arr11[j]) {
            intersection.push(arr10[i]);
            break;
        }
    }
}

console.log("Intersection of arrays:", intersection);
