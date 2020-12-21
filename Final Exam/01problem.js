function solve(input) {
    let str = input.shift();
    let line = input.shift();
    while(line != 'For Azeroth') {
        let a = 'Dispel';
        let b = 'Change';
        let c = 'Remove';

        if(line === 'GladiatorStance') {
            str = str.toUpperCase();
            console.log(str);
        } else if(line === 'DefensiveStance') {
            str = str.toLowerCase();
            console.log(str);
        } else if(line.includes(a)) {
            let [com, ind, letter] = line.split(' ');
            ind = Number(ind);
            if(ind != -1 && ind < str.length) {
                str = str.replace(str[ind], letter);
            console.log('Success!');
            } else {
                console.log(`Dispel too weak.`)
            }            
        } else if(line.includes(b)) {
            let [com1, com2, sub1, sub2] = line.split(' ');
            str = str.replace(sub1, sub2);
            console.log(str);
        } else if(line.includes(c)) {
            let [com1, com2, sub] = line.split(' ');
            str = str.replace(sub, '');
            console.log(str);
        } else {
            console.log(`Command doesn't exist!`)
        }
        line = input.shift(); 
    }
}

solve([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
  ]  
  )