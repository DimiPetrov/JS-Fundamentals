function numMod(modNumber) {
    while (getAverage(modNumber) < 5) {
        modNumber += '9';
    }
    console.log(modNumber);

    function getSum(number) {
        let num = number.toString();
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }
        return sum;
    }

    function getAverage(num) {
        return getSum(num) / num.toString().length;
    }
}

numMod(101)
