function solve(data) {
    let parking = {};

    for (const line of data) {
        let [direction, carNumber] = line.split(', ');

        if (direction == 'IN') {
            parking[carNumber] = 1;
        } else {
            delete parking[carNumber];
        }
    }

    if (parking === {}) {
        console.log(`Parking Lot is Empty`); 
    } else {
         console.log(Object.keys(parking)
            .sort((a, b) => a.localeCompare(b))
            .join('\n'));
           
    }


}

solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA'])

