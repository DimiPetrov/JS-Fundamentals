function solve(arr) {
    let str = arr.shift();
    let line = arr.shift();
    while (line != 'Decode') {
        let [command, a, b] = line.split('|');
        if (command === 'Move') {
            let numLetters = Number(a);
            let cut = str.substring(0, numLetters);
            str = str.replace(cut, '') + cut;
        } else if (command === 'Insert') {
            let index = Number(a);
            let first = str.substring(0, index);
            let second = str.substring(index);
            str = first + b + second;
        } else if (command === 'ChangeAll') {
            let i = str.indexOf(a);
            while (i != -1) {
                str = str.substring(0, i) + b + str.substring(i + a.length);
                i = str.indexOf(a);
            }
        }
        line = arr.shift();
    }
    console.log(`The decrypted message is: ${str}`);
}

solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])