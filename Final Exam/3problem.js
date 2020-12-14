function solve (input) {
  let followers = new Map()

  let line = input.shift()
  while (line != 'Log out') {
    let [com, username, likesCount] = line.split(': ')

    if (com === 'New follower') {
      if (followers.has(username)) {
        //do nothing
      } else {
        let myNewFollower = new Object()
        myNewFollower.username = username
        myNewFollower.likes = 0
        myNewFollower.comments = 0
        followers.set(username, myNewFollower)
      }
    } else if (com === 'Like') {
      if (followers.has(username)) {
        followers.get(username).likes += Number(likesCount)
      } else {
        let myNewFollower = new Object()
        myNewFollower.username = username
        myNewFollower.likes = Number(likesCount)
        myNewFollower.comments = 0
        followers.set(username, myNewFollower)
      }
    } else if (com === 'Comment') {
      if (followers.has(username)) {
        followers.get(username).comments++
      } else {
        let myNewFollower = new Object()
        myNewFollower.username = username
        myNewFollower.likes = 0
        myNewFollower.comments = 1
        followers.set(username, myNewFollower)
      }
    } else if (comm === 'Blocked') {
      if (followers.has(username)) {
        followers.delete(username)
      } else {
        console.log(`${username}: doesn't exist.`)
      }
    }
    line = input.shift()
  }

  console.log(`${followers.size} followers`)
  //here the Map is already populated

  //after sorting, we will not use the Map anymore
  //instead we have an Array called sorted
  let sorted = Array.from(followers.values()).sort(
    (a, b) => b.likes + b.comments - (a.likes + a.comments)
  )

  //now, we just need to display the followers
  for (let follower of sorted) {
    printFollower(follower)
  }
}

//a function to print a follower
function printFollower (follower) {
  console.log(`${follower.username}: ${follower.likes + follower.comments}`)
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
])
