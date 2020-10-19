function bombNumber(arr, input) {
    let bomb = input.shift();
    let power = input;
    while(arr.includes(bomb)) {
        let index = arr.indexOf(bomb);
        let destroyed = power * 2 + 1;
        let startIndex = index - power;

        if(startIndex < 0) {
            destroyed += startIndex;
            startIndex = 0;
        }
        arr.splice(startIndex, destroyed);
    }
    console.log(arr.reduce((a, b) => a + b, 0));
}

bombNumber([1, 2, 2, 4, 2, 2,
    2, 9],
    [4, 2])