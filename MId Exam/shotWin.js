function solve(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let command = arr.shift();
    let count = 0;
    while (command !== 'End') {
        let shot = Number(command);
        if (shot < targets.length) {
            count++;
            for (const el of targets) {
                if (targets[el] != -1) {
                    if (targets[el] > targets[shot]) {
                        targets[el] -= targets[shot];
                    } else {
                        targets[el] += targets[shot];
                    }
                    
                }
                
            }
            targets[shot] = -1;
        }
        command = arr.shift();
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`)
}

solve(['30 30 12 60 54 66', '5', '2', '4', '0', 'End'])