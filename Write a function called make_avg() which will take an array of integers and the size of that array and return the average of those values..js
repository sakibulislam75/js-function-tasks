// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, arrSize) {
    let avg = 0;
    let sum = 0;
    for (let num of arr) {
        sum += num;
        avg = (sum / arrSize);
    }
    return avg.toFixed(2); //for checking i use toFixed(not need for this question)
}
console.log(make_avg([2.155, 20, 2], 3));