function solve(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let splited = commands[i].split(' ');
        let command = splited[0];
        switch (command) {
            case 'add': add(); break;
            case 'addMany': addMany(); break;
            case 'contains': contains(); break;
            case 'remove': remove(); break;
            case 'shift': shift(); break;
            case 'sumPairs': sumPairs(); break;
            case 'print': print(); break;
        }
        function add() {
            let index = parseInt(splited[1]);
            let element = parseInt(splited[2]);
            arr.splice(index, 0, element);
        }
        function addMany() {
            let index = parseInt(splited[1]);
            for (let j = splited.length - 1; j >= 2; j--) {
                let element = parseInt(splited[j]);
                arr.splice(index, 0, element);
            }
        }
        function contains() {
            let element = parseInt(splited[1]);
            console.log(arr.indexOf(element));
        }
        function remove() {
            let index = parseInt(splited[1]);
            arr.splice(index, 1);
        }
        function shift() {
            let position = parseInt(splited[1]);
            for (let a = 0; a < position; a++) {
                let first = arr.shift();
                arr.push(first);
            }
        }
        function sumPairs() {
            arr = arr.map((e, i, arr) => i < arr.length - 1 ? (arr[i] += arr[i + 1]) : arr[i] = arr[i]).filter((e, i) => i % 2 === 0);
        }
        function print() {
            console.log('[ ' + arr.join(', ') + ' ]');
        }
    }
}

solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])