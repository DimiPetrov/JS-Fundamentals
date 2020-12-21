function solve(input) {
    let n = Number(input.shift());
    let pattern = /[|](?<name>[A-Z]{4,})[|][:][#](?<title>\w+ \w+)[#]/g;
    let name = /[A-Z]{4,}/g;
    let title = /\w+ \w+/g;

    for(const line of input) {
        let valid = pattern.exec(line);
        if(valid) {
            const bossName = name.exec(line);
            const bossTitle = title.exec(line);
            console.log(`${bossName}, The ${bossTitle}`);
            const strength = bossName.split();
            const armour = bossTitle.split();
            console.log(`>> Strength: ${strength.length}`);
            console.log(`>> Armour: ${armour.length}`);
        } else {
            console.log(`Access denied!`);
        }
    }
}

solve([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
  ]
  )