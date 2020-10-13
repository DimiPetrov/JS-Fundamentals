function commonElements(arr1, arr2) {
    for(const el of arr1) {
        let isCommon = arr2.includes(el);
        if(isCommon) {
            console.log(el)
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])