const nashville = {
    state: 'Tennessee',
    population: 650000,
    teams: ['Titans', 'Predators']
}

const nashvilleClone =   {...nashville};

const cities = ['Atlanta', 'Nashville', 'Prague', 'Beirut'];

render(nashville);
render(nashvilleClone);
render(nashville === nashvilleClone);
render([...cities, 'Seattle']);

const nums = [3, 4, 5];
const sum = (x, y, z) => x + y + z;