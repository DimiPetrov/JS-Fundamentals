function solve(arr) {
    let str = arr.shift();
    for (const line of arr) {
        if(line == 'Reveal') {
            console.log(`You have a new text message: ${str}`);
            break;
        }
        let [command, a, b] = line.split(':|:');
        if (command == 'InsertSpace') {
            str = str.substring(0, a) + ' ' + str.substring(a);
        } else if (command == 'Reverse') {
            if (str.includes(a)) {
                let i = str.indexOf(a);
                let reversed = a.split('').reverse().join('');
                str = str.substring(0, i) + str.substring(i + a.length) + reversed;
            } else {
                console.log(`error`);
                continue;
            }
        } else if (command == 'ChangeAll') {
            let i = str.indexOf(a);
            while (i != -1) {
                str = str.substring(0, i) + b + str.substring(i + a.length);
                i = str.indexOf(a);
            }
        } 
        console.log(str);
    }  
}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])