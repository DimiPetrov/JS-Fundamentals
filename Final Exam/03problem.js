function solve(input) {
    let heroes = new Map();
    let line = input.shift();
    while (line != 'End') {
        let [com, heroName, spellName] = line.split(' ');
        if (com === 'Enroll') {
            if (!heroes.has(heroName)) {
                let newHeroName = new Object();
                newHeroName.heroName = heroName;
                newHeroName.spellName = [];
                heroes.set(heroName, newHeroName);
            } else {
                console.log(`${heroName} is already enrolled.`)
            }
        } else if (com === 'Learn') {
            if (!heroes.has(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if (heroName.hasOwnProperty(spellName)) {
                    console.log(`${heroName} has already learnt ${spellName}.`);
                } else {
                    heroes.get(heroName[spellName]);
                }
            }
        } else if (com === 'Unlearn') {
            if (!heroes.has(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if (!heroName.hasOwnProperty(spellName)) {
                    console.log(`${heroName} doesn't know ${spellName}.`);
                } else {
                    heroName.delete(spellName);
                }
            }
        }
        line = input.shift();
    }

    let sorted = Array.from(heroes.values()).sort(
        (a, b) => spellName.length[b] - spellName.length[a] ||
            heroname[a].localeCompare(heroName[b])
    );

        console.log(`Heroes:`);

    for (let hero of sorted) {
        console.log(`${hero.heroName}: ${spellName.join(', ')}`);
    }

}

solve([
    'Enroll Stefan',
    'Enroll Peter',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn John ItShouldNotWork',
    'Unlearn George Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]
)