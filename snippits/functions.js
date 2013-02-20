var kilometers = 8;

var costPerKilometer = 5;
var baseCost = 2;

function tripCost(kilometers) {
    return costPerKilometer * kilometers + baseCost;
}

var answer = tripCost(kilometers);

console.log(answer);