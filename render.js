const display = document.querySelector('#display');

function render() {
    Array.from(arguments).forEach(item => {
        let isObj = false;
        if (item instanceof Object) {
            item = JSON.stringify(item);
            isObj = true;
        }
        const el = document.createElement('div');
        el.classList.add(isObj ? 'obj' : 'item');
        el.textContent = item
        display.appendChild(el);

    });
}