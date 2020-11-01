function solve(arr) {
    let sequence = arr.shift().split(' ');
    let move = arr.shift();
    let turns = 0;
    while (move !== 'end') {
        turns++;
        let [x, y] = move.split(' ').map(Number);
        if (x == y || x < 0 || y < 0 ||
            x >= sequence.length || y >= sequence.legth) {
                let element = `-${turns}a`;
                sequence.splice(sequence.length / 2, 0, element, element);
            console.log(`Invalid input! Adding additional elements to the board`);
            move = arr.shift();
            continue;
        }

        if(sequence[x] == sequence[y]) {
            let element = sequence[x];
            sequence.splice(x, 1);
            let index = sequence.indexOf(element);
            sequence.splice(index, 1);
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log(`Try again!`);
        }
        if(sequence.length == 0) {
            console.log(`You have won in ${turns} turns!`);
            break;
        }
        move = arr.shift();
    }

    if(sequence.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(sequence. join(' '));
    } 
}

solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
)