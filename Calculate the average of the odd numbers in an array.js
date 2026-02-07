// Calculate the average of the odd numbers in an array
function oddArrayAvg(arr) {
    let avg = 0;
    let sum = 0;
    let odd = [];
    for (let num of arr) {
        if (num % 2 != 0) {
            odd.push(num);
        }
    }
    for (let ch of odd) {
        sum = sum + ch;
        avg = (sum) / odd.length;
    }
    return avg;
}
console.log(oddArrayAvg([5, 5, 5, 2, 6, 8]));


//another one--overall array avg of odd number
function oddAvg(arr) {
    let sum = 0;
    let avg = 0;
    for (let num of arr) {
        if (num % 2 != 0) {
            sum += num;
            avg = (sum) / arr.length;
        }
    }
    return avg;
}
console.log(oddAvg([5, 2, 5, 5, 2, 6])); //overallarray od no avg(onlyoddsum/total length)