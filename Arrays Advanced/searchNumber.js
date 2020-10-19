function search(arr, input) {
    let toTake = input[0];
    let toRemove = input[1];
    let newArr = arr.slice(0, toTake).slice(toRemove);
    let num = input[2];
    let count = 0;
    for (let el of newArr) {
        if (el === num) {
            count++;
        }
    }
    console.log(`Number ${num} occurs ${count} times.`);
}

search([5, 2, 3, 4, 1, 6],
    [5, 2, 3])