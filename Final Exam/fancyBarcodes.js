function solve(input) {
    let n = Number(input.shift());
    let regex = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;

    for(const line of input) {
        let productGroup = '';
        valid = regex.exec(line);
        if(valid) {
            let digit = /\d/g;
            productGroup += line.match(digit);
            if(productGroup.length > 0) {
                console.log(`Product group: ${productGroup.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

solve([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ])