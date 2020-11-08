function solve(input) {
    let n = Number(input.shift());
    let total = 0;
    for(let i = 0; i < n; i++) {
        let pricePerCapsule = Number(input.shift());
        let days = Number(input.shift());
        let count  = Number(input.shift());
        let price = ((days * count) * pricePerCapsule);
        total += price;
        console.log(`The price for the coffee is: $${price.toFixed(2)}`);
    }
        console.log(`Total: $${total.toFixed(2)}`);
}

solve([ 2, 4.99, 31, 3, 0.35, 31, 5 ])