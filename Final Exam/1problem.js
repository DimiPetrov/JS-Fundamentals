function solve(input) {
    let str = input.shift();

    let line = input.shift();
    while(line != 'Complete') {
        let a = 'GetDomain';
        let b = 'Replace';
        if(line === 'Make Upper') {
            str = str.toUpperCase();
            console.log(str);
        } else if(line === 'Make Lower') {
            str = str.toLowerCase();
            console.log(str);
        } else if(line.includes(a)) {
            let [com, count] = line.split(' ');
            let domain = str.substring(str.length - count);
            console.log(domain);
        } else if(line === 'GetUsername') {
            let symbol = '@';
            if(str.includes(symbol)) {
                let i = str.indexOf(symbol);
                let user = str.substring(0, i);
                console.log(user);
            } else {
                console.log(`The email ${str} doesn't contain the @ symbol`);
            }
        }
         else if(line.includes(b)) {
            let [com, char] = line.split(' ');
            str = str.replaceAll(char, '-');
        } else if(line === 'Encrypt') {
            let encrypted = [];
            for(let i = 0; i < str.length; i++) {
                let number = str[i].charCodeAt();
                encrypted.push(number);
            }
            console.log(encrypted.join(' '));
        }        
        line = input.shift();
    }
    
}

solve([   
  'AnotherMail.com',
  'Make Lower',
  'GetUsername',
  'Replace a',
  'Complete'
  ]
  )