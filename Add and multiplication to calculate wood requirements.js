/*
chair---3cft
diningTable---10cft
bed--------30cft
*/

function totalWoodQuantity(perChair, perDiningTable, perBed) {

    let totalChair = perChair * 2;
    let totalDiningTable = perDiningTable * 2;
    let totalPerBed = perBed * 2;

    let total = (totalChair + totalDiningTable + totalPerBed);
    return total;
}
console.log('Total wood quantity cost:', totalWoodQuantity(3, 10, 30));