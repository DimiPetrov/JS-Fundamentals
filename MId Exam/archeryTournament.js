function solve(input) {
    let field = input.shift().split('|').map(Number);
    let fieldIndex = 0;
    let points = 0;

    for (let i = 0; i < input.length; i++) {
        let splitted = input[i].split('@');
        let command = splitted[0];
        let commandIndex = Number(splitted[1]);
        let length = Number(splitted[2]);

        switch (command) {
            case 'Shoot Left':
                if (commandIndex >= 0 && commandIndex < field.length) {
                    fieldIndex = (commandIndex + field.length - length % field.length) % field.length;
                    let pointsTaken = Math.min(field[fieldIndex], 5);
                    field[fieldIndex] -= pointsTaken;
                    points += pointsTaken;
                }
                break;

            case 'Shoot Right':
                if (commandIndex >= 0 && commandIndex < field.length) {
                    fieldIndex = (length + commandIndex) % field.length;
                    let pointsTaken = Math.min(field[fieldIndex], 5);
                    field[fieldIndex] -= pointsTaken;
                    points += pointsTaken;
                }
                break;

            case 'Reverse':
                let reversed = field.reverse();
                field = reversed;
                break;

            case 'Game over':
                console.log(field.join(' - '));
                console.log(`Iskren finished the archery tournament with ${points} points!`);
        }
    }
}

solve([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
]
)