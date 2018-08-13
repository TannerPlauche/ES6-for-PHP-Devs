class Person {

    constructor(fName, lName, favColor) {
        this.fName = fName;
        this.lName = lName;
        this.favColor = favColor;
    }

    fullName() {
        return `${this.fName} ${this.lName}`
    }
}

class Programmer extends Person {

    constructor(fName, lName, favColor, favLang) {
        super(...arguments); // instantiates Person props and methods
        this.favLang = favLang;
    }

    getFavLang() {
        return this.favLang;
    }
}

const tanner = new Person('Tanner', 'Plauche', 'red');
render(tanner);
render(tanner.fullName());

const bob = new Programmer('Bob', 'Doe', 'red', 'JS');
render(bob); // props from Person
render(bob.fullName()); // method from Person
render(bob.getFavLang()); // new prop and method