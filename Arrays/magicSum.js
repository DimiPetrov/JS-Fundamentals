function magicSum(arr, n) {
    for(let i = 0; i < arr.length; i++) {
        
        for(let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if(sum === n) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
        
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27)