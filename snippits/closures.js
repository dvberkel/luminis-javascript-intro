var kilometers = 8;

function tripCalculator(costPerKilometer, baseCost) {
    return function(kilometers) {
	return costPerKilometer * kilometers + baseCost;
    };
};

var tripCost = tripCalculator(5, 2);

var answer = tripCost(kilometers);

console.log(answer);