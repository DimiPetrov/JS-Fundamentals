function solve(array) {
    let health = 100;
    let bitcoins = 0;
    isDead = false;

    for(let i = 0; i < array.length; i++) {
        let command = array[i];
        let splitted = command.split(' ');

        if(splitted[0] === 'potion') {
            let addHealth = Number(splitted[1]);
            if(health + addHealth > 100) {
                addHealth = 100 - health;
                health = 100;
            } else {
                health += addHealth;
            }
            console.log(`You healed for ${addHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if(splitted[0] === 'chest') {
            bitcoins += Number(splitted[1]);
            console.log(`You found ${splitted[1]} coins.`);
        } else {
            health -= Number(splitted[1]);
            if(health > 0) {
                console.log(`You slayed ${splitted[0]}.)`);
            } else {
                console.log(`You died! Killed by ${splitted[0]}.`);
                console.log(`Best room: ${i + 1}.`);
                isDead = true;
                break;
            }
        }
    }
    if(isDead = false) {
    console.log(`You've made it!`);
    console.log(`Coins: ${bitcoins}`);
    console.log(`Health: ${health}`);
    } 
}

solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])