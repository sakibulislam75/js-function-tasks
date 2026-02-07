function converter(inch, mile) {
    let feet = (inch / 12);
    let kilo = (mile * 1.6); //1mile=1.6kilometer
    return ('Feet:' + feet + ' ' + 'kilometre:' + kilo);
}
console.log(converter(24, 2));

function sk(n1, n2) {
    let sum = n1 + n2;
    return (sum); //first return shudhu kaj kore porer gula execute hoi na
    return ('sakib');

}
console.log(sk(2, 2));