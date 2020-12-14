function solve(input) {
    let followers = {};
    let count = 0;

    let likes = 0;
    let comments = 0;

    let line = input.shift();
    while(line != 'Log out') {
        let [com, username, likesCount] = line.split(': ');

        if(com === 'New follower') {
            if(!followers.hasOwnProperty(username)) {
                followers[username] = [likes, comments];
                count++;
            }
        } else if(com === 'Like') {
            if(followers.hasOwnProperty(username)) {
                likes[username] += likesCount;
            } else { 
                followers[username] = [likes, comments];
                count++;
            }
        } else if(com === 'Comment') {
            if(followers.hasOwnProperty(username)) {
                comments[username]++;
            } else {
                followers[username] = [likes, comments];
                comments++;
                count++;
            }
        } else if(comm === 'Blocked') {
            if(followers.include(username)) {
                delete username[likes, comments];
                count--;
            } else {
                console.log(`${username} doesn't exist.`);
            }
        }
        line = input.shift();
    }

    console.log(`${count} followers`);
    let total = likes + comments;
    let sorted = Object.keys(username).sort((a, b) => total[b] - total[a]);
     for(let username of sorted) {
         console.log(`${username}: ${total}`);
     }
}

solve([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
  ]
  )