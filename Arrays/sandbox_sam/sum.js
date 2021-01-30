const sum = (arr, selector) => {
  const total = arr
    .map(selector)
    .reduce((accumulator, currentValue) => accumulator + currentValue)
  return total
}

const numbers = [1, 2, 3, 4]
console.log(sum(numbers, n => n)) // 10

const pets = [
  { type: 'dog', age: 2 },
  { type: 'cat', age: 5 },
  { type: 'dog', age: 7 }
]

console.log(sum(pets, p => p.age)) // 14
