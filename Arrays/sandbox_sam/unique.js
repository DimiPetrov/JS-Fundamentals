function onlyUnique (value, index, self) {
  return self.map(this).indexOf(this(value)) === index
}

const unique = (arr, selector) => {
  const filtered = arr.filter(onlyUnique, selector)
  return filtered
}

const numbers = [1, 1, 3, 2, 1, 2, 3]
console.log(unique(numbers, n => n)) // [1, 3, 2]

const pets = [
  { type: 'dog', name: 'sharo' },
  { type: 'cat', name: 'maca' },
  { type: 'dog', name: 'balkan' }
]
let uniqueByType = unique(pets, p => p.type)
console.log(JSON.stringify(uniqueByType))

// [{ type: 'dog', name: 'sharo' }, { type: 'cat', name: 'maca' }]
