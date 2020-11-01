function solve(array) {
    let arr = array.shift().split(' ').map(Number);
    for (let i = 0; i < array.length; i++) {
        let [command, index1, index2] = array[i].split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        switch (command) {
            case 'swap': swap(index1, index2); break;
            case 'multiply': multiply(index1, index2); break;
            case 'decrease': decrease(); break;
            case 'end': print(); break;
        }
    }
    function swap(index1, index2) {
        var temp;
        temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    function multiply(index1, index2) {
        arr[index1] = arr[index1] * arr[index2];
    }
    function decrease() {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] - 1;
        }
    }
    function print() {
        console.log(arr.join(', '));
    }
}

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
)

