function oddEvenSum(input) {
    let num = input;
    let newN = parseInt(num);

    var oddSum = 0;
    var evenSum = 0;
    for(let i = 1; i <= newN.length; i++) {
        if(i % 2 !== 0) {
            oddSum += newN[i];
        } else {
            evenSum += newN[i];
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435)