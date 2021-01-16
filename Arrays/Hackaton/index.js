const fill = () => {
  let theInitialArray = [1, 2, 3]
  let toto = Array(3)

  //let filled = utils.fill(theInitialArray, 'a')
  let filledNewArr = utils.fill(toto, 2)
  let filledInRange = utils.fill([4, 6, 8, 10], '*', 1, 3)

const incrementByTwo(a){
 a = a + 2;
}

let mitko = 2;
let sam = 1;
incrementByTwo(mitko);
console.log(sam);
console.log(mitko);

  console.log(filled)
  // => ['a', 'a', 'a']

  console.log(filledNewArr)
  // => [2, 2, 2]

  console.log(filledInRange)
  // => [4, '*', '*', 10]

  console.log(array)
  // => [1, 2, 3]
  // array is not changed!
}
