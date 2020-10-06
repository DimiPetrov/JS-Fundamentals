function solve (numOne, numTwo, numThree) {
  let result = 'Positive'

  if (numOne === 0 || numTwo === 0 || numThree === 0) {
    return 'Positive'
  }

  if (numOne < 0) result = changeSign(result)
  if (numTwo < 0) result = changeSign(result)
  if (numThree < 0) result = changeSign(result)

  return result
}

function changeSign (inputSign) {
  if (inputSign === 'Positive') {
    return 'Negative'
  } else {
    return 'Positive'
  }
}

let result = solve(-6, 10, 10)
console.log(result)
