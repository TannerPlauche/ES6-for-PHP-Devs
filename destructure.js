const person = {
    first: 'Tanner',
    last: 'Plauche',
    country: 'USA',
    city: 'Mount Juliet',
    twitter: '@thePhonetician'
};
const first = person.first;
const last = person.last;

const tanner = {
    fName: 'Tanner',
    lName: 'Plauche',
    country: 'USA',
    city: 'Mount Juliet',
    twitter: '@thePhonetician'
};
const {
    lName,
    fName
} = tanner;

render('FIRST', first)
render('LAST', last)
render('fName', fName)
render('lName', lName);