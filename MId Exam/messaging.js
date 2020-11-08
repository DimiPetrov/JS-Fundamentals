function solve(input) {
    let chat = [];
    for(i = 0; i < input.length; i++) {
        let token = input[i].split(' ');
        let command = token[0];
        switch(command) {
            case 'Chat':
                let message = token[1];
                chat.push(message);
                break;

            case 'Delete':
                let messageToDelete = token[1];
                if(chat.includes(messageToDelete)) {
                    let index = chat.indexOf(messageToDelete);
                    chat.splice(index, 1);
                }
                break;

            case 'Edit':
                let messageToEdit = token[1];
                let editedVersion = token[2];
                let index1 = chat.indexOf(messageToEdit);
                chat.splice(index1, 1, editedVersion);
                break;

            case 'Pin':
                let word = token[1];
                let wordIndex = chat.indexOf(word);
                chat.splice(wordIndex, 1)
                chat.push(word);
                break;

            case 'Spam':
                for(let j = 1; j < token.length; j++) {
                    chat.push(token[j]);
                }
                break;

            case 'end':
                break;

        }
    }
    console.log(chat.join('\n'));
    
}

solve([
    'Chat John',
    "Spam Let's go to the zoo",
    'Edit zoo cinema',
    'Chat tonight',
    'Pin John',
    'end'
  ])