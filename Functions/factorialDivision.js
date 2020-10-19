function factorialDivision(n1, n2) {
    return (factorial(n1) / factorial(n2)).toFixed(2);

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }

}

console.log(factorialDivision(5, 2))