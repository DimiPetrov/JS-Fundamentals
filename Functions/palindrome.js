function palindrome(arr) {
    let result = '';
    for(let num of arr) {
        let isPalindrome = 'true';
        num = String(num);
        let mid = parseInt(num.length / 2);
        
        for(let i = 0; i<= mid; i++) {
            let lastIndex = num.length - 1;
            if(num[i] !== num[lastIndex - i]) {
                isPalindrome = 'false';
                break;
            }
        }
        result += isPalindrome + '\n'
    }
    return result;
}

console.log(palindrome([32,2,232,1010]))