function solve(arr) {
    let str = arr.shift();

    for (const line of arr) {
        let com = line.split(' ');

        if (com === 'Done') {
            break;
        }

        if (com[0] === 'TakeOdd') {
            let result = [];
            for (let i = 0; i < str.length; i++) {
                if (i % 2 != 0) {
                    result.push(str[i]);
                }
            }
            str = result;
            console.log(str);
        } else if (com[0] === 'Cut') {
            let index = Number(com[1]);
            let length = Number(com[2]);
            const substr = str.substr(index, length);
            str = str.replace(substr, '');
            console.log(str);
        } else if (com[0] === 'Substitute') {
            let substring = com[1];
            let substitute = com[2];
            if (str.includes(substring)) {
                str = str.split(substring).join(substitute);
                console.log(str);
            } else {
                console.log(`Nothing to replace!`);
            }
        }
    }
    console.log(`"Your password is: ${str}`);
}

solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]
)