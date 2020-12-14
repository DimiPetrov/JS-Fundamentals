function solve(input) {
    let str = input.shift();

    for(const line of input) {
        if(line == 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${str}`);
            break;
        }

        let [com, a, b] = line.split(':');
        if(com == 'Add Stop') {
            a = Number(a);
            let firstPart = str.substring(0, a);
            let secondPart = str.substring(a);
            str = firstPart + b + secondPart;
            console.log(str);
        } else if(com == 'Remove Stop') {
            a = Number(a);
            b = Number(b);
            let removed = str.substring(a, b + 1);
            str = str.replace(removed, '');
            console.log(str);
        } else if(com == 'Switch') {
            if(str.includes(a)){
                str = str.replace(a, b);
                console.log(str);
            }
        }
    }
}

solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ]
  )