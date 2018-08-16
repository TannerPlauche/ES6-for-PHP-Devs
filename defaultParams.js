function oldMultiply(a = 5, b = 10) {
    a = isFinite(a) ? a : 5;
    b = isFinite(b) ? b : 10;
}

function multiply(a = 5, b = 10) {
    return a * b;
}

render(multiply(5, 2));
// expected output: 10

render(multiply(6));
// expected output: 60

render(multiply());
// expected output: 50