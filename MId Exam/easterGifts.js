function solve(input) {
    let list = input.shift().split(' ');
    

    for(let i = 0; i < input.length; i++) {
        let token = input[i].split(' ');
        let command = token[0];
        switch(command) {
            case 'OutOfStock':
                let selectedGift = token[1];
                if(list.includes(selectedGift)) {
                   for(let j = 0; j < list.length; j++) {
                       list[list.indexOf(selectedGift)] === 'None';
                   }
                }
                break;

            case 'Required':
                let requiredGift = token[1];
                let requiredIndex = Number(token[2]);
                if(requiredIndex >= 0 && requiredIndex <= list.length) {
                    list[requiredIndex] = requiredGift;
                }
                break;

            case 'JustInCase':
                let inCaseOfGift = token[1];
                list.pop();
                list.push(inCaseOfGift);
                break;
            
            case 'No Money':
                break;
        }
    }
    list = list.filter((value)=> value !== 'None');
    console.log(list.join(' '));
}

solve([
    'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
  ]
  )