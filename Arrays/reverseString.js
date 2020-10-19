function swap(arr) {
    let lastIndex = arr.length - 1;
    for(let i = 0; i < arr.length / 2; i++) {
        let current = arr[i];
        arr[i] = arr[lastIndex - i];
        arr[lastIndex - i] = current;
    }
    console.log(arr.join(' '));
}

swap(['a', 'b', 'c', 'd', 'e'])