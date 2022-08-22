type PaymentTypes = 'credit_card' | 'paypal' | 'wire_transfer'
// ---
function pay(type: PaymentTypes, amount: number) {
  const payment = PaymentMethodFactory.getPaymentHandler(type)
  return payment.pay(amount)
}
// ---
class PaymentMethodFactory {
  static getPaymentHandler(paymentType: PaymentTypes) {
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
