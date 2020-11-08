function solve(input) {
    let list = input.shift().split('&');
    let token = input.shift().split(` | `);

    while (token != `Done`) {
        let command = token[0];
        let type1 = token[1]
        let type2 = token[2];

        if (command === 'Add Book') {
            if (!(list.includes(type1))) {
                list.unshift(type1);
            }
        } else if (command === 'Take Book') {
            if (list.includes(type1)) {
                let ind = list.indexOf(type1);
                list.splice(ind, 1);
            }
        } else if (command === 'Swap Books') {
            if (list.includes(type1) && list.includes(type2)) {
                let indBookOne = list.indexOf(bookOne);
                let indBookTwo = list.indexOf(bookTwo);
                list.splice(indBookOne, 1, bookTwo);
                list.splice(indBookTwo, 1, bookOne)
            }
        } else if (command === 'Insert Book') {
            list.push(type1);
        } else if (command === 'Check Book') {
            if (list[Number(type1)] !== undefined) {
                console.log(list[Number(type1)]);
            }
        }
        token = input.shift();
    }
    console.log(list.join(', '));
}

solve([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
])