interface IPriceCalculator {
  calculatePrice(): number
}

class CarPriceCalculator implements IPriceCalculator {
  private year: number
  private brand: string

  constructor(year: number, brand: string) {
    this.year = year
    this.brand = brand
  }

  calculatePrice(): number {
    // Some cool logic here
    return 5000
  }
}

class TruckPriceCalculator implements IPriceCalculator {
  private year: number
  private mileage: number

  constructor(year: number, mileage: number) {
    this.year = year
    this.mileage = mileage
  }

  calculatePrice(): number {
    // Some cool logic here
    return 16000
  }
}

/**
 * This is the ADAPTER Class
 */
class UKCarPriceCalculator implements IPriceCalculator {
  private priceCalculator: SealedThirdPartyAdapteeEUCalculatorClass

  constructor(adaptee: SealedThirdPartyAdapteeEUCalculatorClass) {
    this.priceCalculator = adaptee
  }

  calculatePrice(): number {
    const calculatedPriceString = this.priceCalculator.getPrice()
    const [ calculatedPrice ] = calculatedPriceString.split(' ')
    return +calculatedPrice
  }
}

/**
 * This is the ADAPTEE Class, Whose interface doesn't match with IPriceCalculator interface
 */
class SealedThirdPartyAdapteeEUCalculatorClass {
  private year: string
  private type: string

  constructor(year: string, type: 'sedan' | 'van') {
    this.year = year
    this.type = type
  }

  getPrice(): string {
    // Here, some cool calculations
    return '14500 GBP'
  }
}

function main() {
  const carPriceCalculator = new CarPriceCalculator(2010, 'BMW')
  const truckPriceCalculator = new TruckPriceCalculator(2019, 120000)
  const adapteeInstance = new SealedThirdPartyAdapteeEUCalculatorClass('2018', 'sedan')
  const ukCarPriceCalculator = new UKCarPriceCalculator(adapteeInstance)

  printVehiclePrice(carPriceCalculator)
  printVehiclePrice(truckPriceCalculator)
  printVehiclePrice(ukCarPriceCalculator)
}

/**
 * This function is the CLIENT of the ADAPTER because it is expecting to receive
 * an IPriceCalculator object type which must have the calculatePrice method
 * @param priceCalculator 
 */
function printVehiclePrice(priceCalculator: IPriceCalculator) {
  console.log('Vehicle price:', priceCalculator.calculatePrice())
}

main()
