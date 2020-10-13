function solve(arr) {
    let n = arr.pop();
    let result = [];
    for(let index in arr) {
        if(index % n === 0) {
            result.push(arr[index])
        }
    }
    console.log(result.join(' '));
}

solve(['dsa', 'asd', 'test', 'test', '2'])