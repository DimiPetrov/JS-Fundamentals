function nextDay(year, month, day) {
    let date = year.month.day.Date();
    let nextDay = date.Date(day + 1);
    console.log(nextDay);
}

nextDay(2016, 9, 30)