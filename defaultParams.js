function multiply(a, b = 10) {
    return a * b;
}

render(multiply(5, 2));
// expected output: 10

render(multiply(5));
// expected output: 50