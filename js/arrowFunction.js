function oldFunction(parameters) {
    this.name = 'tanner';
    return parameters.toString();
}

const arrowFunc = parameters => parameters.toString()

const obj = {
    name: 'tanner',
    getName: function () {
        this.name = 'joe';
        return this.name;
    },
}

render(oldFunction(123));

render(obj.getName());