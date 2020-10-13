function solve(arr) {
    let rotations = +arr[arr.length-1];
    arr.pop();

    if (isNaN(rotations)){
        console.log('Empty');
    } else {
        for (let i = 1; i <= rotations; i++) {
            arr.unshift(arr.pop());
        }
        console.log(arr.join(' '))
    }
}

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])