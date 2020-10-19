function solve(arr) {
    let newArr = [];
    for (let el of arr) {
        if (!newArr.includes(el)) {
            newArr.push(el);
        }
    }
    console.log(newArr.join(' '));
}

solve([20, 8, 12, 13, 4,
    4, 8, 5])