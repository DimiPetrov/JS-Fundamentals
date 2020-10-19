function solve(array) {
    array = array.map(Number);
    console.log(array[0] + array.pop());
}

solve(['5', '10'])