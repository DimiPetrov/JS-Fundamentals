function solve(n) {
    let odd = 0;
    let sum = 0
    for(let i = 1; i <= n; i++) {
        odd = 2 * i - 1;
        console.log(odd);
        sum += odd;
    }
    console.log(`Sum: ${sum}`);
}

solve(3)