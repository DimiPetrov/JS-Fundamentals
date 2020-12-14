function solve(input) {
    let n = input.shift();
    let list = {};

    for(let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split('|');
    }
    
    for(const line of input) {
    let line = input.shift();
          
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
  ])