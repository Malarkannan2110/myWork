let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let space = 1; space <= rows - i; space++) {
        pattern += " ";
    }
    for (let star = 1; star <= (2 * i - 1); star++) {
        if (star === 1 || star === (2 * i - 1) || i === rows) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    console.log(pattern);
}
