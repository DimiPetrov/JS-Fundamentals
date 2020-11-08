function solve(input) {
    let cost = Number(input.shift());
    let months = Number(input.shift());
    let savings = 0;

    for(let i = 1; i <= months; i++) {
        if(i % 2 !== 0 && i !== 1) {
            savings -=  savings * 0.16;
        }
        if(i % 4 === 0) {
            savings *= 1.25;
        }
        savings += cost * 0.25;
    }
    if(savings >= cost) {
        let souvenirs = savings - cost;
        console.log(`Bravo! You can go to Disneyland and you will have ${souvenirs.toFixed(2)}lv. for souvenirs.`);
    } else {
        let missing = cost - savings;
        console.log(`Sorry. You need ${missing.toFixed(2)}lv. more.`);
    }
}

solve([ '1000', '4' ])