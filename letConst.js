let name = 'Tanner';

if (true) {
    let name = 'NAME CHANGED';
}

console.log(name);

function getName() {
    var name = 'joe';
    return name;
}

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 1);
// }
// console.log('this is i', i);

console.log(getName());
name = 'Joe';