function sumAndSubtract(x, y, z) {

    function sum(a, b) {
        return a + b;
    }

    let result = sum(x, y);
    return result - z;
    
}

console.log(sumAndSubtract(23, 6, 10));