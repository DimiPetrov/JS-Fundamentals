function solve(arr) {
    let energy = Number(arr.shift());
    let count = 0;
    let command = arr.shift().split(', ');
    let isWin = true;
    while(command !== 'End of battle') {
        let reach = Number(command);
        if(energy < reach) {
            isWin = false;
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            break;
        } else {
            energy -= reach;
            count++;
            if(count % 3 == 0) {
                energy += count;
            }
        }
        command = arr.shift();
    }
    if(isWin) {
        console.log(`Won battles: ${count}. Energy left: ${energy}`);
    }
    
}

solve([ '200', '54', '14', '28', '13', 'End of battle' ])