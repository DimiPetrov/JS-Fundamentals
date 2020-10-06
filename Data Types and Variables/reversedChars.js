function reverse(char1, char2, char3) {
    let output = char3.concat(' ' + char2 + ' ' + char1);
    console.log(output);
}

reverse('A', 'B', 'C')