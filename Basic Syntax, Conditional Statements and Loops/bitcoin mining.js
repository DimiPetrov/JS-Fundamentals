function solve(arr) {
    let money = 0;
    let bitcoin = 0;
    let boughtBitcoin = 0;
    let countBitcoin = 0;
    let day = 0;
    let firstDay = 0;

    for (let i = 0; i < arr.length; i++) {
        day++;
        let dailyEarning = Number(arr[i]);
        if (day % 3 === 0) {
            dailyEarning *= 0.7;
        }
        money += dailyEarning * 67.51;
        if (money >= 11949.16) {
            countBitcoin++;
            boughtBitcoin += Math.floor(money / 11949.16);
            bitcoin += boughtBitcoin;
            money -= boughtBitcoin * 11949.16;
            boughtBitcoin = 0;
            if (countBitcoin == 1) {
                firstDay = day;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}

solve([100, 200, 300])