function solve(input) {
    let list = input.shift().split(', ');
    
    let blackCount = 0;
    let lostCount = 0;
    for (let i = 0; i < input.length; i++) {  
        let token = input[i].split(' ');    
        let command = token[0];
        switch (command) {
            case 'Blacklist':
                let name = token[1];
                if (list.includes(name)) {
                    let index = list.indexOf(name);
                    list.splice(index, 1, 'Blacklisted');
                    console.log(`${name} was blacklisted.`);
                    blackCount++;
                } else {
                    console.log(`${name} was not found.`);
                }
                break;

            case 'Error':
                let ind = Number(token[1]);
                if(list[ind] !== 'Blacklisted' && list[ind] !== 'Lost') {
                    console.log(`${list[ind]} was lost due to an error.`);
                    list.splice(ind, 1, 'Lost'); 
                    lostCount++;                  
                }
                break;

            case 'Change':
                let changeIndex = Number(token[1]);
                let newName = token[2];
                if(changeIndex >= 0 && changeIndex < list.length) {
                    console.log(`${list[changeIndex]} changed his username to ${newName}.`);
                    list.splice(changeIndex, 1, newName);
                }
                break;

            case 'Report':
                break;
        }
    }
    console.log(`Blacklisted names: ${blackCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(list.join(' '));
}

solve([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
])