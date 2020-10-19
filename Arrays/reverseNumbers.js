function reverse(n, arr) {
    let result = [];
    for(let i = n - 1; i >= 0; i--) { 
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}

reverse(3, [10, 20, 30, 40, 50])