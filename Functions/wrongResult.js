function solve (numOne, numTwo, numThree) {
  let result = ''

  if (numOne === 0 || numTwo === 0 || numThree === 0) {
    return 'Positive'
  } else {
    let countNegative = 0
    if (numOne < 0) countNegative++
    if (numTwo < 0) countNegative++
    if (numThree < 0) countNegative++

    if (countNegative % 2 === 0) {
      return 'Positive'
    } else {
      return 'Negative'
    }
  }
}

let result = solve(-6, 0, 10)
console.log(result)

/*if(numOne >= 0 && numTwo >= 0 && numThree >= 0) {
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
    }*/
//console.log(result)
/*

//let result = solve(-6, 10, 70)

let myFirstResult = multiply(5, 6)
let mySecond = addition(myFirstResult, 10)

let myOtherResult = addition(multiply(5, 6), multiply(8, 8))
addition(30, 64)

console.log(myOtherResult)*/

/*function multiply (a, b) {
  return a * b
}

function addition (a, b) {
  return a + b
}*/
