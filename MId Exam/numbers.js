function solve(input) {
    let arr = input.split(' ').map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (average < arr[i]) {
            result.push(arr[i]);
        }
    }
    if (result.length === 0) {
        console.log(`No`);
    } else if (result.length <= 5 && result.length > 0) {
        let sorted = result.sort((a, b) => b - a);
        console.log(sorted.join(' '));
    } else if (result.length > 5) {
        let newResult = result.sort((a, b) => b - a);
        let sliced = newResult.splice(0, 5);
        console.log(sliced.join(' '));
    }
}

solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')