function solve (input) {
  const n = Number(input.shift())
  const pattern = /[|](?<name>[A-Z]{4,})[|][:][#](?<title>\w+ \w+)[#]/
  //let name = /[A-Z]{4,}/g
  //let title = /\w+ \w+/g

  for (const line of input) {
    let valid = pattern.exec(line)
    //console.log(valid)
    if (valid) {
      //syntax in 2 lines
      /*let bossNameArray = name.exec(line)
      let bossName = bossNameArray[0]

      //syntax in 1 line
      let bossTitle = title.exec(line)[0]

      //third option, with only 1 regex
      bossName = valid[1]
      bossTitle = valid[2]*/

      //fourth option
      bossName = valid.groups.name
      bossTitle = valid.groups.title

      console.log(`${bossName}, The ${bossTitle}`)
      const strength = bossName.length
      const armour = bossTitle.length
      console.log(`>> Strength: ${strength}`)
      console.log(`>> Armour: ${armour}`)
    } else {
      console.log(`Access denied!`)
    }
  }
}

solve([
  '3',
  '|GEORGI|:#Lead architect#',
  '|Hristo|:#High Overseer#',
  '|STEFAN|:#Assistant Game Developer#'
])
