function solve(input) {
    let map = new Map();
    let neighborhoods = input.shift().split(', ');
    
    for(let neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }
    
    for(let i = 0; i < input.length; i++) {
        let current = input.shift().split(' - ');
        let neighborhood = current[0];
        let person = current[1];
        if(neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }

    let sorted = Array.from(map).sort((a, b) => {neighborhood.length(b) - neighborhood.length(a)});
    for(let neighborhood of sorted) {
        console.log(`${neighborhood}: ${neighborhood.length}`);
        for(let j = 0; j < neighborhood.length; j++) {
            console.log(`--${person}`);
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])