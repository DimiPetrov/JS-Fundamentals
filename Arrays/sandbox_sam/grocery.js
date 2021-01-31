const orders = [
  {
    item: 'beer',
    quantity: 2,
    price: 2.5,
    buyer: {
      name: 'pesho'
    }
  },
  {
    item: 'snacks',
    quantity: 1,
    price: 4.9,
    buyer: {
      name: 'gosho'
    }
  },
  {
    item: 'peanuts',
    quantity: 4,
    price: 1.8,
    buyer: {
      name: 'gosho'
    }
  }
]

function onlyUnique (value, index, self) {
  return self.indexOf(value) === index
}

const unique = (arr, selector) => {
  const filtered = arr.map(selector).filter(onlyUnique)
  return filtered
}

const buyerNames = unique(orders, n => n.buyer.name)

const sumForOneCustomer = (arr, predicate) => {
  return arr
    .filter(predicate)
    .reduce(
      (acc, currentValue) =>
        (acc = acc + currentValue.quantity * currentValue.price),
      0
    )
}

console.log(
  sumForOneCustomer(orders, (o, index, arr) => o.buyer.name === 'pesho')
)
console.log(
  sumForOneCustomer(orders, (o, index, arr) => o.buyer.name === 'gosho')
)
