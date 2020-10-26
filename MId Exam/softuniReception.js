function calculate(arr) {
    let array = arr.map(Number);
    let answeredPerHour = array[0] + array[1] + array[2];
    let students = array[3];
    let hours = 0;
    while(students > 0) {
        students -= answeredPerHour;
        hours++;
        if(hours % 4 == 0) {
            hours++;
        }
    }
        console.log(`Time needed: ${hours}h.`)
}

calculate([ '1', '2', '3', '45' ])