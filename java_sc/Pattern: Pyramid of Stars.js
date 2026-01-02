let rows3 = 5;

for (let i = 1; i <= rows3; i++) {
    let pattern = "";
    for (let space = 1; space <= rows3 - i; space++) {
        pattern += " ";
    }
    for (let star = 1; star <= (2 * i - 1); star++) {
        pattern += "*";
    }
    console.log(pattern);
}
