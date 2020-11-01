function solve(arr) {
    let sequence = arr.shift().split(' ').map(Number);
    let commands = arr.shift();
    while (commands !== 'End') {
        let splitted = commands.split(' ');
        let command = splitted[0];
        let index = splitted[1];
        switch (command) {
            case 'Shoot': shoot(); break;
            case 'Add': add(); break;
            case 'Strike': strike(); break;
        }

        
    }
    function shoot(index, power) {
        
        let power = splitted[2];
        if (sequence.includes(index)) {
            sequence[index] -= power;
            if (sequence[index] <= 0) {
                sequence.splice(index, 1);
            }
        }
    }

    function add(index, value) {

        let value = splitted[2];
        if (sequence.includes(index)) {
            sequence[index] += value;
        } else {
            console.log(`Invalid placement!`);
        }
    }

    function strike(index, radius) {

        let radius = splitted[2];
        if (sequence.includes(index)) {
            sequence.splice(index, 1);
        }
        if (sequence.includes(index - radius)) {
            sequence.splice(index - radius);
        }
        if (sequence.includes(index + radius)) {
            sequence.splice(index + radius);
        }
    }
    console.log(sequence.join('|'));
}

solve([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
]
)