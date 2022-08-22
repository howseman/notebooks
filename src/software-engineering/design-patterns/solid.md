# SOLID PRINCIPLES
Notes from my self study and:

[Becoming a better developer by using the SOLID design principles by Katerina Trajchevska](https://www.youtube.com/watch?v=rtmFCcjEgEw)

[SOLID Design Patterns](https://youtu.be/agkWYPUcLpg)

## Single responsibility:
> Every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class. All its services should be narrowly aligned with that responsibility.
> A class should have only a single reason to change
-- Robert C. Martin --
* A class should be only responsible for one thing
* There is a place for everything and everything is in its place
* Find one reason to change and take everything else out of the class
* Very precise names for many small classes > generic names for large classes

## Open/Closed Principle:
* An entity should be open for extension but closed for modification
* Extend functionality by adding new code instead of changing existing code
* Separate the behaviors, so the system can be easily extended, but never broken
* Goal: Get to a point where you can never break the core of your system

**Example:**

**FROM:**
```ts
function pay(type: string, amount: number) {
  const payment = new Payment()

  // This should be in a different place
  switch (type) {
    case 'credit_card':
      return payment.payWithCreditCard(amount)
    case 'paypal':
      return payment.payWithPaypal(amount)
    case 'wire_transfer':
      return payment.payWithWireTransfer(amount)
    default:
      throw new Error(`Unsupported payment method ${type}`)
  }
}

class Payment {
  payWithCreditCard(amount: number) { ... }
  payWithPaypal(amount: number) { ... }
  payWithWireTransfer(amount: number) { ... }
  // If we need to add another new payment method, we will need to modify this class
}
```

**TO:**
```ts
function pay(type: string, amount: number) {
  // If we need to add a new method we don't need to change this function neither Payment class as we did before
  const payment = PaymentMethodFactory.getPaymentHandler(type)
  return payment.pay(amount)
}
// --- Spoiler Alert! Single Responsibility Principle, applied here
class PaymentMethodFactory {
  static getPaymentHandler(paymentType: string) {
    switch (paymentType) {
      case 'credit_card':
        return new CreditCardPayment()
      case 'paypal':
        return new PaypalPayment()
      case 'wire_transfer':
        return new WireTransferPayment()
      default:
        throw new Error(`Unsupported payment method ${paymentType}`)
    }
  }
}
// ---
interface IPayable {
  pay(amount: number): boolean
}
class CreditCardPayment implements IPayable {
  pay(amount: number) { return true }
}
class PaypalPayment implements IPayable {
  pay(amount: number) { return true }
}
class WireTransferPayment implements IPayable {
  pay(amount: number) { return true }
}
```

## Liskov Substitution Principle:
* Any derived class should be able to substitute its parent class whithout the consumer knowing it
* Every class that implements an interface must be able to substitute any reference throughout the code that implements that same interface
* Every part of the code should get the expected result no matter what instance of a class you send to it, given it implements the same interface
* We should be able to change every concrete class instance in our code with anything that implements the same interface

**FROM:**
```ts
class Plane {
  private _engine: any // :PlaneEngine

  startEngine() { this._engine.start() }

  fly() {
    if (this._engine.isStarted) {
      return 'flying'
    } else {
      throw new Error('Engines not started')
    }
  }

  startDescent() { return 'descending' }
}

class PaperPlane extends Plane {
  private _planeLaunched: boolean = false

  // Code Smell: It could break the app if client calls this method
  startEngine() { throw new Error(`Paper planes doesn't have an engine`) }

  // Code Smell: Won't be good if you have to overwrite several parent methods
  fly() {
    if (this._planeLaunched) {
      return 'flying'
    } else {
      throw new Error('Plane not launched')
    }
  }
}
```
**TO:**
```ts
interface IMotorized {
  startEngine(): string;
}
interface IFlyable {
  fly(): string;
  startDescent(): string;
}

class Plane implements IMotorized, IFlyable {
  startEngine() { ... }
  fly() { ... }
  startDescent() { ... }
}

class PaperPlane implements IFlyable {
  fly() { ... }
  startDescent() { ... }
}
```

## Interface Segregation Principle:
* A client should never be forced to depend on methods it does not use
* Or, a client should never depend on anything more than the method it is calling
* Changing one method in a class shouldn't affect classes that don't depend on it
* Split interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interested in (Replace fat interfaces with many small, specific interfaces).

## Dependency Inversion:
* High level modules shouldn't depend on low level modules. Both should depend on abstractions.
* Abstractions shouldn't depend on details. Details should depend on abstractions.