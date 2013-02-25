var kilometers = 8;

var TripCalculator = (function(){
    return function(costPerKilometer, baseCost){
	this.tripCost = function(kilometers){
	    return costPerKilometer * kilometers + baseCost;
	}
    }
})();

var calculator = new TripCalculator(5, 2);

console.log(calculator.tripCost(kilometers));
