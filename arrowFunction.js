function oldFunction(parameters) {
    this.name = 'tanner';
    // render('old this', this);
    return parameters.toString();
}

const arrowFunc = parameters => {
    // render('new this', this);
    return parameters.toString()
};

const obj = {
    name: 'tanner',
    getName: function () {
        this.name = 'joe';
        return this.name;
    },
    getArrowName: () => {
        return this.name;
    }
}

render(oldFunction(123));
render(arrowFunc(123));

render(obj.getName());
render(obj.getArrowName());