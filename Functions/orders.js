function calculate(arg1, arg2) {
    var product = arg1;
    var quantity = Number(arg2);
    switch(product) {
        case "coffee": price = 1.5 * quantity; break;
        case "water": price = 1 * quantity; break;
        case "coke": price = 1.4 * quantity; break;
        case "snacks": price = 2 * quantity; break;
    }
    console.log(price.toFixed(2));
}

calculate("water", 5)