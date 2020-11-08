function solve(input) {
    let list = input.shift().split(' ');
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let token = input[i].split(' ');
        let command = token[0];
        switch (command) {
            case 'Include':
                let name = token[1];
                list.push(name);
                break;

            case 'Visit':
                let position = token[1];
                let count = Number(token[2]);
                if (position === 'first') {
                    for(let j = 1; j <= count; j++) {
                        list.shift();
                    }                    
                } else if (position === 'last') {
                    for(let k = 1; k <= count; k++) {
                        list.pop();
                    }
                    
                }
                break;

            case 'Prefer':
                let index1 = Number(token[1]);
                let index2 = Number(token[2]);
                if (index1 >= 0 && index1 < list.length
                    && index2 >= 0 && index2 < list.length) {
                    var temp;
                    temp = list[index1];
                    list[index1] = list[index2];
                    list[index2] = temp;
                }
                break;

            case 'Place':
                let shop = token[1];
                let index = token[2];
                if(index >= 0 && index + 1 < list.length) {
                    list.splice(index + 1, 0, shop);
                }
                break;
        }
    }
    console.log(`Shops left:`);
    console.log(list.join(' '));
}

solve([
    'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
])