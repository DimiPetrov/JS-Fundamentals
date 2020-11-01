function solve(input) {
    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let bonus = Number(input.shift());
    let arr = input.map(x => Number(x));
    arr.length === students;
    let array = [];

    for(let i = 0; i < arr.length; i++) {
        let totalBonus = Number(arr[i] / lectures * (5 + bonus));
        array.push(totalBonus);
    }

     let maxBonus = Math.max(...(array));

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${Math.max(...(arr))} lectures.`);   
}

solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])