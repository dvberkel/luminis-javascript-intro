var kilometers = 8;

var tripCost = (function(){
    var tripCalculator = function(costPerKilometer, baseCost) {
	return function(kilometers) {
	    return costPerKilometer * kilometers + baseCost;
	};
    };

    return tripCalculator(5, 2);
})();

var answer = tripCost(kilometers);

console.log(answer);