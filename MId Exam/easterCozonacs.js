function solve(input) {
    let budget = Number(input.shift());
    let flourPrice = Number(input.shift());
    let eggPrice = flourPrice * 0.75;
    let milkPrice = flourPrice * 1.25;
    let cozonacPrice = flourPrice + eggPrice + milkPrice / 4;

    let cozonacs = 0;
    let eggs = 0;

    while(budget >= cozonacPrice) {
        budget -= cozonacPrice;
        cozonacs++;
        eggs += 3;
        if(cozonacs % 3 == 0) {
            eggs -= cozonacs - 2;
        }
    }
    console.log(`You made ${cozonacs} cozonacs! Now you have ${eggs} eggs and ${budget.toFixed(2)}BGN left.`);
}

solve([ '20.50', '1.25' ])