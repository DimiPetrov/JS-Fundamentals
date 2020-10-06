function groupPrice(people, type, day) {
    if(day === 'Friday') {
        switch(type) {
            case 'Students': price = 8.45; break;
            case 'Business': price = 10.90; break;
            case 'Regular': price = 15; break;
        }
    } else if(day === 'Saturday') {
        switch(type) {
            case 'Students': price = 9.80; break;
            case 'Business': price = 15.60; break;
            case 'Regular': price = 20; break;
        }
    } else if(day === 'Sunday') {
        switch(type) {
            case 'Students': price = 10.46; break;
            case 'Business': price = 16; break;
            case 'Regular': price = 22.50; break;
        }
    }
    let totalPrice = price * people;
    if(type === 'Students' && people >= 30) {
        totalPrice *= 0.85;
    } else if(type === 'Business' && people >= 100) {
        totalPrice = price * (people - 10);
    } else if(type === 'Regular' && people >= 10 && people <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

groupPrice(30, 'Students', 'Sunday')