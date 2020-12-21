function solve(input) {
    let arr = [];
    for (let el of input) {
        arr.push(el);
    }

    let map = new Map();
    for (let i = 0; i < arr.length; i += 2) {
            arr[i] = resource;
            arr[i + 1] = Number(quantity);
        }
    }

    if (!map.has(resource)) {
        map.set(resource, quantity);
    } else {
        let currQuantity = map.get(resource);
        let newQuantity = currQuantity += quantity;
        map.set(resource, newQuantity);
    }

    for(let [resource, newQuantity] of map) {
        console.log(`${resource} -> ${newQuantity}`);
    }

solve([
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15'
])