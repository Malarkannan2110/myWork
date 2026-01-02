let rows4 = 5;

// Upper part
for (let i = 1; i <= rows4; i++) {
    let pattern = "";
    for (let space = 1; space <= rows4 - i; space++) {
        pattern += " ";
    }
    for (let star = 1; star <= (2 * i - 1); star++) {
        pattern += "*";
    }
    console.log(pattern);
}

// Lower part
for (let i = rows4 - 1; i >= 1; i--) {
    let pattern = "";
    for (let space = 1; space <= rows4 - i; space++) {
        pattern += " ";
    }
    for (let star = 1; star <= (2 * i - 1); star++) {
        pattern += "*";
    }
    console.log(pattern);
}
