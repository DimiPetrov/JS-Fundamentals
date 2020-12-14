function solve(input) {
    let n = Number(input.shift());
    let pattern = /([$%])([A-Z][a-z]{2,})\1: ([[])(\d{1,})(])([|])([[])(\d{1,})(])([|])([[])(\d{1,})(])()[|]/g;
    let num = /\d{1,}/g;
    let name = /([A-Z][a-z]{2,})/g;

    for(const line of input) {
        let numbers = '';
        let valid = pattern.exec(line);
        if(valid) {
            numbers += line.match(num);
            let [num1, num2, num3] = numbers.split(',');
            let decrypt = [];
            let symbol1 = String.fromCharCode(num1);
            let symbol2 = String.fromCharCode(num2);
            let symbol3 = String.fromCharCode(num3);
            decrypt.push(symbol1);
            decrypt.push(symbol2);
            decrypt.push(symbol3);
            let tag = line.match(name);
            console.log(`${tag}: ${decrypt.join('')}`);
        } else {
            console.log(`Valid message not found!`);
        }       
    }
}

solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
  ])