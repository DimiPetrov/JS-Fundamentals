function addOrSubtract(arr) {
    let sum = 0;
    for(const el of arr) {
        sum += el;
    }
    
    for(let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if(element % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }

    let modSum = 0;
    for(const el of arr) {
        modSum += el;
    }
    console.log(arr);
    console.log(sum);
    console.log(modSum);
}

addOrSubtract([-5, 11, 3, 0, 2])