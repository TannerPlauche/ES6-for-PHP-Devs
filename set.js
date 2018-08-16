const tanner = 'Tanner';
const sarah = 'Sarah';
const obj = {
    name: "Tanner"
}
const people = new Set([tanner, sarah]);
people.add('Nikolai');
people.add(obj);

render(people.has('Nikolai'));
render(people.has('Sarah'));
render(people.has('Tanner'));
render(people.has(obj));
render(Array.from(people.entries()));