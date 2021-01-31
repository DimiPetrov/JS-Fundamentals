const min = (arr, selector) => {
  return arr.reduce(
    (acc, currentValue) =>
      (acc = selector(acc) < selector(currentValue) ? acc : currentValue),
    Number.MAX_SAFE_INTEGER
  )
}

//found a mistake - it's max instead of min
const max = (arr, selector) => {
  return arr.reduce(
    (acc, currentValue) =>
      (acc = selector(acc) > selector(currentValue) ? acc : currentValue),
    Number.MIN_SAFE_INTEGER
  )
}

const numbers = [2, 1, 6, 25, 5, 88]
console.log(min(numbers, n => n)) // 1
console.log(max(numbers, n => n)) // 8

const pets = [
  { type: 'dog', age: 2 },
  { type: 'cat', age: 5 },
  { type: 'dog', age: 7 }
]

// found 2 mistakes - missing ')' at the end of the lines
console.log(min(pets, p => p.age)) // 2 instead of { type: 'dog', age: 2 }
console.log(max(pets, p => p.age)) // 7 instead of { type: 'dog', age: 7 }
