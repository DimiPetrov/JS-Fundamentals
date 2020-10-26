function solve(arr) {
    let parsedArr = arr.map(Number);
    let result = [];
    let totalConcrete = 0;
    let sections = parsedArr.filter(len => len < 30).length;
    while(sections > 0) {
        let dailyConcrete = 0;
        for(let i = 0; i < parsedArr.length; i++) {
            if(parsedArr[i] < 30) {
                parsedArr[i]++;
                dailyConcrete += 195;
                if(parsedArr == 30) {
                    sections--;
                }
            }
        }
        totalConcrete += dailyConcrete;
        result.push(dailyConcrete);
    }
    let money = totalConcrete * 1900;
    console.log(result.join(', '));
    console.log(`${money} pesos`);
}

solve([21, 25, 28])