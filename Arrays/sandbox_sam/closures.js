const fourArgs = [1, 2, 3, 4]
const fiveArgs = [1, 2, 3, 4, 5]
const flip = fn => {
  return args => {
    let reversedArray = args.reverse()
    return fn(reversedArray)
  }
}

function display (args) {
  return args
}

let flipped = flip(display)

console.log(flipped(fourArgs))
console.log(flipped(fiveArgs))
