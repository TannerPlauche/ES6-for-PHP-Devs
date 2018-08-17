const cities = new Map();
const london = {
    name: 'London',
    country: 'England',
    population: 60000000
};
const atlanta = {
    name: 'Atlanta',
    country: 'USA',
    population: 750000
}


render(Array.from(cities.entries()));
// render(cities.get('atlanta'));
// render('has atlanta?', cities.has('atlanta'));