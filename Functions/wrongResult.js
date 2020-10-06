function solve(numOne, numTwo, numThree) {
    let result = '';
    if(numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Positive';
    } else if(numOne < 0 && numTwo > 0 && numThree > 0) {
        result = 'Negative';
    } else if(numOne < 0 && numTwo < 0 && numThree >= 0) {
        result = 'Positive';
    } else if(numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative';
    } else if(numOne > 0 && numTwo < 0 && numThree > 0) {
        result = 'Negative';
    } else if(numOne >= 0 && numTwo < 0 && numThree < 0) {
        result = 'Positive';
    } else if(numOne > 0 && numTwo > 0 && numThree < 0) {
        result = 'Negative';
    } else if(numOne < 0 && numTwo >= 0 && numThree < 0) {
        result = 'Positive';
    } else if((numOne == 0 && numTwo == 0) || (numOne == 0 && numTree == 0) || (numTwo == 0 && numThree == 0)) {
        result = 'Positive';
    }
    console.log(result);
}

solve(-6, 0, 0)