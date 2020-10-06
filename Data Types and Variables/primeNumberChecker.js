function solve(n) {
    if((n != 1 && n != 2 && n != 3 && n != 5 && n != 7) && (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0)) {
        console.log(`false`);
    } else {
        console.log(`true`);
    }
}

solve(23)