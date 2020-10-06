function calculate(lost, helmet, sword, shield, armor) {
    let sum = 0;
    for(i = 1; i <= lost; i++) {
        if(i % 12 == 0) {
            sum += helmet; 
            sum += sword;
            sum += shield; 
            sum += armor;
        } else if(i % 6 == 0) {
            sum += helmet;
            sum += sword;
            sum += shield;
        } else if(i % 3 == 0) {
            sum += sword;
        } else if(i % 2 == 0) {
            sum += helmet;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

calculate(7, 2, 3, 4, 5)