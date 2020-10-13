function equalSums(arr) {
    
    let isIndex = false;
    for(let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        if(i != 0) {
            for(let j = 0; j < i; j++) {
                leftSum += arr[j];
            }
        }

        if(i != arr.length - 1) {
            for(let k = i + 1; k < arr.length; k++) {
                rightSum += arr[k];
            }
        }
        if(leftSum === rightSum) {
            isIndex = true;
            console.log(i);
        } 
    }
    if(!isIndex) {
        console.log(`no`)
    }
}

equalSums([1, 2, 3, 3])