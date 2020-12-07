function travel(arr) {
    let travel = {};
    for (element of arr) {
        let [countryName, townName, travelCost] = element.split(' > ');
        if (!travel.hasOwnProperty(countryName)) {
            travel[countryName] = [];
        }
        if (travel[countryName].includes(townName)) {
            let index = travel[countryName].indexOf(townName) + 1;
            if (travelCost <= travel[countryName][index]) {
                let ind = travel[countryName].indexOf(townName) + 1;
                travel[countryName][ind] = travelCost;
                continue;
            }
        }
        travel[countryName].push(townName, travelCost);

    }

    let orderedCountries = [...Object.keys(travel)].sort((a, b) => a.localeCompare(b));
    let result = "";
    for (let country of orderedCountries) {
        result += country + " -> ";
        let sortedPrices = [...Object.values(travel[country])].sort((a, b) => costS(a, b, travel, country));
        for (let i = 0; i < sortedPrices.length; i++) {
            let name = sortedPrices[i];
            let price = sortedPrices[i + 1]
            result += `${name} -> ${price} `;
            if (i + 2 >= sortedPrices.length) {
                break;
            } else {
                i++;
            }
        }
        result += "\n";
    }
    console.log(result);

    function costS(town1, town2, travel, country) {
        let priceOne = travel[country][town1];
        let priceTwo = travel[country][town2];
        return priceOne - priceTwo
    }
}

travel([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'])