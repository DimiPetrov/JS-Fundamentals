function solve(arr) {
    let n = Number(arr.shift());
    let mileageObj = {};
    let fuelObj = {};
    
    for(let i = 0; i < n; i++) {
        let [car, mileage, fuel] = arr.shift().split('|');
        mileageObj[car] = Number(mileage);
        fuelObj[car] = Number(fuel);
    }

    for(const line of arr) {
        let [com, car, distance, fuel] = line.split(' : ');
        distance = Number(distance);
        fuel = Number(fuel);

        if(com == 'Drive') {
            if(fuelObj[car] < fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                mileageObj[car] += distance;
                fuelObj[car] -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if( mileageObj[car] >= 100000) {
                    delete mileageObj[car];
                    delete fuelObj[car];
                    console.log(`Time to sell the ${car}!`);
                }
            }
        } else if(com == 'Refuel') {
            fuel = distance;
            let refuel = fuelObj[car] + fuel > 75 ? 75 - fuelObj[car] : fuel;
            fuelObj[car] += refuel;
            console.log(`${car} refueled with ${refuel} liters`);
        } else if(com == 'Revert') {
            kilometers = distance;
            if(mileageObj[car] - kilometers < 10000) {
                mileageObj[car] = 10000;
            } else {
                mileageObj[car] -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }       
    }

    Object.keys(fuelObj)
    .sort((a, b) => mileageObj[b] - mileageObj[a] ||
    a.localeCompare(b)).forEach(car => {
        console.log(`${car} -> Mileage: ${mileageObj[car]} kms, Fuel in the tank: ${fuelObj[car]} lt.`);
    });
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])