function solve(arr) {
    let neighbourhood = arr.shift().split('@').map(Number);
    let commands = arr.shift();
    let currentHouse = 0;

    while(commands !== 'Love!') {
        let splitted = commands.split(' ');
        let jumpLength = Number(splitted[1]);
        currentHouse += jumpLength;
        if(currentHouse >= neighbourhood.length) {
            currentHouse = 0;
        }
        if(neighbourhood[currentHouse] === 0) {
            console.log(`Place ${currentHouse} already had Valentine's day.`);
        } else {
            neighbourhood[currentHouse] -= 2;
            if(neighbourhood[currentHouse] === 0){
                console.log(`Place ${currentHouse} has Valentine's day.`);
            }            
        }
        commands = arr.shift();
    }
    console.log(`Cupid's last position was ${currentHouse}.`);

    let isSucces = true;
    let count = 0;

    for(const house of neighbourhood) {
        if(house !== 0) {
            isSucces = false;
            count++;
        }
    }
    if(isSucces) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }    
}

solve([
    '2@4@2',  'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
  ])