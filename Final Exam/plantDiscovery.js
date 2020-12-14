function solve(input) {
    let n = Number(input.shift());
    let plantCollection = {};

    for (let i = 0; i < n; i++) {
        let [name, rarity] = input.shift().split('<->');
        rarity = Number(rarity);
        plantCollection[name] = { rarity, rating: [] }
    }

    let line = input.shift();

    while (line !== 'Exhibiton') {
        let [com, plant] = line.split(': ');
        let [name, data] = plant.split(' - ');
        if(plantCollection.hasOwnProperty(name)) {
            if (com == 'Rate') {
                let rating = Number(data);
                plantCollection[name].rating.push(rating);
            } else if (com == 'Update') {
                let newRarity = Number(data);
                plantCollection[name].rarity = newRarity;
            } else if (com == 'Reset') {
                plantCollection[name].rating = [];
            }
        }
        
        line = input.shift();
    }

    let sorted = Object.keys(plantCollection)
        .sort((a, b) => plantCollection[b].rarity - plantCollection[a].rarity ||
            average(plantCollection[b].rating) - average(plantCollection[a].rating)
        );

    console.log('Plants for the exhibition:');
    for(let name of sorted) {
        console.log(`- ${name}; Rarity: ${plantCollection[name].rarity}; Rating: ${average(plantCollection[name].rating).toFixed(2)}`);
    }
    
    function average(arr) {
        if(!arr.length) return 0;
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }        
}

solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]
)