function solve(arr) {
    let price = 0;
    let customer = '';
    for (const line of arr) {
        if (line == 'regular' || line == 'special') {
            customer = line;
            break;
        }
        let currentPrice = Number(line);
        if (currentPrice <= 0) {
            console.log(`Invalid price!`);
            continue;
        } else {
            price += currentPrice;
        }
    }

    if (price == 0) {
        console.log(`Invalid order!`)
    } else {
        let tax = price * 0.2;
        let total = price + tax;
        if (customer == 'special') {
            total = (price + tax) * 0.9;
        }
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${total.toFixed(2)}$`);
    }
}

solve([
    'regular'
    ])