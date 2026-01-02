let a4 = 15, b4 = 25, c4 = 20;
let smallest3;

if (a4 <= b4 && a4 <= c4) {
    smallest3 = a4;
} else if (b4 <= a4 && b4 <= c4) {
    smallest3 = b4;
} else {
    smallest3 = c4;
}

console.log("Smallest of three numbers:", smallest3);
