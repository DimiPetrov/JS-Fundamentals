function solve(arr) {
    let list = arr.shift().split('!');
    let commands = arr.shift();
    while (commands !== 'Go Shopping!') {
        let splited = commands.split(' ');
        let command = splited[0];
        let item = splited[1];
        let index = list.indexOf(item);
        switch (command) {
            case 'Urgent':
                if (index < 0) {
                    list.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (~index) {
                    list.splice(index, 1);
                }
                break;
            case 'Correct':
                let newItem = splited[2];
                if (~index) {
                    list.splice(index, 1, newItem);
                }
                break;
            case 'Rearrange':
                if (~index) {
                    list.splice(index, 1);
                    list.push(item);
                }
                break;
            default:
                break;
        }
        commands = arr.shift();
    }
    console.log(list.join(', '));
}

solve([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]
)