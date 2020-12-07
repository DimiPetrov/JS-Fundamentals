function solve(n) {
    let arr = [];
    let total = 0;
    for(let i = 1; i < n; i++) {
        if(n % i === 0) {
            arr.push(i);
            total += i;
        }
    }
    if(total === n) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
    
}

solve(27)