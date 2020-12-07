function solve(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let command = arr.slice(0, -1).map(Number);

    for (const el of command) {
        if (targets[el] != undefined && targets[el] != -1) {
            let targetValue = targets[el];
            targets[el] = -1;

            targets = targets.map(e => {
                if (e === -1) return e;
                if (e > targetValue) {
                    return e - targetValue;
                } else {
                    if (e <= targetValue) return e + targetValue;
                }
            });
        }

    }
    let shootTargets = targets.filter(e => e === -1).length;
    console.log(`Shot targets: ${shootTargets} -> ${targets.join(' ')}`)
}

solve(['30 30 12 60 54 66', '5', '2', '4', '0', 'End'])