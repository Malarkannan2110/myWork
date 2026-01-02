let a3 = 15, b3 = 25, c3 = 20;
let largest3;

if (a3 >= b3 && a3 >= c3) {
    largest3 = a3;
} else if (b3 >= a3 && b3 >= c3) {
    largest3 = b3;
} else {
    largest3 = c3;
}

console.log("Largest of three numbers:", largest3);
