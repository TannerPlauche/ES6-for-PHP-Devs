let name = 'Tanner';

if (true) {
    let name = 'NAME CHANGED';
}

render(name);

function getName() {
    var name = 'joe';
    return name;
}

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => render(i), 1);
// }
// render('this is i', i);

render(getName());
name = 'Joe';