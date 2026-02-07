function maxFinder(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return "max value: " + num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return "max value: " + num2;
    } else if (num3 >= num1 && num3 >= num2) {
        return "max value: " + num3;
    }
}
console.log(maxFinder(1, 2, 3));