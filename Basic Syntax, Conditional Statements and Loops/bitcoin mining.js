function solve(arr) {
    let money = 0;
    let bitcoin = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(i % 3 === 0) {
        money += (arr[i] * 67.51) * 0.7;
        } else {
            money += (arr[i] * 67.51); 
        }
        if(money >= 11949.16) {
            bitcoin++;
            money -= 11949.16;
            if(bitcoin == 1) {
                let num  = i;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if(bitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${num}`);
    }
    console.log(`Left money: ${money} lv.`);

}

solve([100,200,300])