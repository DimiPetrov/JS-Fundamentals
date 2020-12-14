function solve(str) {
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let cal = 0;
    let matches = [];
    let regex = pattern.exec(str);
    while(regex) {
        matches.push({ item: regex[2], day: regex[3], cal: regex[4] });
        cal += Number(regex[4]);
        regex = pattern.exec(str);
    }
    let days = Math.floor(cal / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    for(let i = 0; i < matches.length; i++) {
        console.log(`Item: ${matches[i].item}, Best before: ${matches[i].date}, Nutrition: ${matches[i].calories}"`)
    }
}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
  ])