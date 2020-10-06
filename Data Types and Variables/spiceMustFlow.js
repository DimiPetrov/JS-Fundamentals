function solve(yield) {
    let extract = 0;
    let day = 0;
    while(yield >= 100) {
        extract += yield - 26;
        day++;
        yield -= 10;
    }
    extract -= 26;
    console.log(day);
    console.log(extract);
}

solve(111)