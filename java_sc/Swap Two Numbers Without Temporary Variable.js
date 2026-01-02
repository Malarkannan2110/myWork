let x = 5, y = 10;

console.log("Before swap: x =", x, ", y =", y);
x = x + y;
y = x - y;
x = x - y;
console.log("After swap: x =", x, ", y =", y);
