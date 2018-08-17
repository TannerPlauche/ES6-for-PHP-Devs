function oldMultiply(a = 5, b = 10) {
    a = isFinite(a) ? a : 5;
    b = isFinite(b) ? b : 10;
}

const multiply = (a = 5, b = 10) => a * b;