function leapYearChecker(year) {
    if (year % 400 === 0) {
        return `${year}:leap year`;
    } else if ((year % 4 === 0) && (year % 100 !== 0)) {
        return `${year}:leap year`;
    } else {
        return `${year}:not leap year`;
    }
}
console.log(leapYearChecker(2028));