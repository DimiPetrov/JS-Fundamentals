function solve(n) {
    let extract = 0;
    let day = 0;
    while (n >= 100) {
        extract += n - 26;
        day++;
        n -= 10;
    }
    extract -= 26;
    if(extract < 0) {
        extract = 0;
    }
    console.log(day);
    console.log(extract);
}

solve(111)