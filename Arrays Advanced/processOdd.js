function processOdd(inputArr) {
    let filtered = inputArr.filter(isOddIndex);
    let doubled = filtered.map(x => x * 2);
    console.log(doubled.reverse().join(' '));

    function isOddIndex(value, index) {
        return (index % 2) == 1;
    }
}

processOdd([10, 15, 20, 25])