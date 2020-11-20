function solve(array) {
    let string = array.toString();
    let dungeon = string.split('|');
    let health = 100;
    let coins = 0;
    let totalCoins = 0;
    let room = 0;

    for (let i = 0; i < dungeon.length; i++) {
        let currentRoom = dungeon[i].split(' ');
        let name = currentRoom[0];
        let num = Number(currentRoom[1]);
        room++;
        if (name === 'potion') {
            if (health + num > 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`)
            console.log(`Current health: ${health} hp.`);
        } else if (name === 'chest') {
            coins = Number(num);
            totalCoins += Number(num);
            console.log(`You found ${num} coins.`);
        } else {
            health -= Number(num);
            if (health > 0) {
                console.log(`You slayed ${name}.`);
            } else {
                console.log(`You died! Killed by ${name}.`);
                console.log(`Best room: ${room}`);
                break;
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${totalCoins}`);
        console.log(`Health: ${health}`);
    }
}

solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])