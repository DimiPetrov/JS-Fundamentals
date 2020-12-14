function solve(arr) {
    let result = [];
    let total = 0;
    for(const line of arr) {
        let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
        let match = regex.exec(line);
        if(match) {
            result.push(match.groups.name);
            total += Number(match.groups.price) * Number(match.groups.quantity);
        }
    }
    console.log(`Bought furniture:`);
    if(result.length > 0) {
        console.log(result.join('\n'));
    }    
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])