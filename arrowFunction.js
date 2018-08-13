function oldFunction(parameters) {
    console.log('old this', this);
    return parameters.toString();
}

const arrowFunc = parameters => {
    console.log('new this', this);
    return parameters.toString()
};


console.log(oldFunction(123));
console.log(arrowFunc(123));