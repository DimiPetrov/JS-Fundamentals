function solve(input) {
    let regex = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];
    let travelPoints = 0;

    if (regex.test(input)) {
        const ourDest = input.match(regex);
        ourDest.forEach(input => {
            travelPoints += input.length - 2;
            destinations.push(input.slice(1, (input.length - 1)))
        });
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')