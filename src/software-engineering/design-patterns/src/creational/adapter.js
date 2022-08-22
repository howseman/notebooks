var CarPriceCalculator = /** @class */ (function () {
    function CarPriceCalculator(year, brand) {
        this.year = year;
        this.brand = brand;
    }
    CarPriceCalculator.prototype.calculatePrice = function () {
        // Some cool logic here
        return 5000;
    };
    return CarPriceCalculator;
}());
var TruckPriceCalculator = /** @class */ (function () {
    function TruckPriceCalculator(year, mileage) {
        this.year = year;
        this.mileage = mileage;
    }
    TruckPriceCalculator.prototype.calculatePrice = function () {
        // Some cool logic here
        return 16000;
    };
    return TruckPriceCalculator;
}());
/**
 * This is the ADAPTER Class
 */
var UKCarPriceCalculator = /** @class */ (function () {
    function UKCarPriceCalculator(adaptee) {
        this.priceCalculator = adaptee;
    }
    UKCarPriceCalculator.prototype.calculatePrice = function () {
        var calculatedPriceString = this.priceCalculator.getPrice();
        var calculatedPrice = calculatedPriceString.split(' ')[0];
        return +calculatedPrice;
    };
    return UKCarPriceCalculator;
}());
/**
 * This is the ADAPTEE Class, Whose interface doesn't match with IPriceCalculator interface
 */
var SealedThirdPartyAdapteeEUCalculatorClass = /** @class */ (function () {
    function SealedThirdPartyAdapteeEUCalculatorClass(year, type) {
        this.year = year;
        this.type = type;
    }
    SealedThirdPartyAdapteeEUCalculatorClass.prototype.getPrice = function () {
        // Here, some cool calculations
        return '14500 GBP';
    };
    return SealedThirdPartyAdapteeEUCalculatorClass;
}());
function main() {
    var carPriceCalculator = new CarPriceCalculator(2010, 'BMW');
    var truckPriceCalculator = new TruckPriceCalculator(2019, 120000);
    // const ukCarPriceCalculator = new UKCarPriceCalculator(2018, 56000)
    var adapteeInstance = new SealedThirdPartyAdapteeEUCalculatorClass('2018', 'sedan');
    var ukCarPriceCalculator = new UKCarPriceCalculator(adapteeInstance);
    printVehiclePrice(carPriceCalculator);
    printVehiclePrice(truckPriceCalculator);
    printVehiclePrice(ukCarPriceCalculator);
}
/**
 * This function is the CLIENT of the ADAPTER because it is expecting to receive
 * an IPriceCalculator object type which must have the calculatePrice method
 * @param priceCalculator
 */
function printVehiclePrice(priceCalculator) {
    console.log('Vehicle price:', priceCalculator.calculatePrice());
}
main();
