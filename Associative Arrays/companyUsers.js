function solve(input) {
    let companies = {};
    for (const el of input) {
        let [company, id] = el.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }
        companies[company].add(id);
    }
    let sorted = Object.entries(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let el of sorted) {
        console.log(el[0]);
        for (let number of el[1]) {
            console.log(`-- ${number}`);
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
  ])