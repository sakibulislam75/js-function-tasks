function maxFinder(num) {
    let max = num[0];
    for (let n of num) {
        if (max < n) {
            max = n;
        }
    }
    return max;
}

console.log("The largest values of the array is :", maxFinder([1, 2, 3, 200]));