function solve(arr) {
    let neighourhood = arr.shift().split('@');
    let commands = arr.shift();
    let currentHouse = 0;

    while(commands !== 'Love!') {
        let splitted = commands.split(' ');
        let jumpLength = Number(splitted[1]);
        currentHouse += jumpLength;
        if(currentHouse > neighourhood.length) {
            currentHouse = 0;
        }
        if(neighourhood[currentHouse] === 0) {
            console.log(`Place ${currentHouse} already had Valentine's day.`);
        } else {
            neighourhood[currentHouse] -= 2;
            if(neighourhood[currentHouse] === 0){
                console.log(`Place ${currentHouse} has Valentine's day.`);
            }            
        }
        commands = arr.shift();
    }
    console.log(`Cupid's last position was ${currentHouse}.`);

    let isSucces = true;
    let count = 0;

    for(const house of neighourhood) {
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