// original implementation:

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
  purchaseCandy(quantity) {
    this.paymentProcessor.pay(5 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.strip = new Stripe(user);
  }
  pay(amountInDollars) {
    this.strip.makePayment(amountInDollars * 100);
  }
}
class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(`${this.user} made payment of $${amountInCents} with stripe`);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.Paypal = new Paypal();
  }
  pay(amountInDollars) {
    this.Paypal.makePayment(this.user, amountInDollars);
  }
}
class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of $${amountInDollars} with paypal`);
  }
}
const store = new Store(new StripePaymentProcessor("alice"));
const store2 = new Store(new PaypalPaymentProcessor("alice"));
const store3 = new Store(new PaypalPaymentProcessor("alice"));
store.purchaseBike(2);
store2.purchaseHelmet(2);
store3.purchaseCandy(4);

//=================================== another implementation ======================//

// class Purchases {
//     constructor(paymentProcessor) {
//         this.paymentProcessor = paymentProcessor;
//     }
//     purchaseBike(quantity) {
//         this.paymentProcessor.pay(200 * quantity)
//     }
//     purchaseHelmet(quantity) {
//         this.paymentProcessor.pay(15 * quantity)
//     }
//     purchaseCandy(quantity) {
//         this.paymentProcessor.pay(5 * quantity)
//     }

// }

// class StripePaymentProcessorFor {
//     constructor(user) {
//         this.user = user;
//     }
//     pay(amountInDollars) {
//         console.log(`${this.user} made payment of ${amountInDollars*100} cents with Stripe`)
//     }
// }

// class PaypalPaymentProcessorFor {
//     constructor(user) {
//         this.user = user
//     }
//     pay(amountInDollars) {
//         console.log(`${this.user} made payment of $${amountInDollars} with Paypal`)
//     }

// }
// class CashPaymentProcessorFor {
//     constructor(user) {
//         this.user = user
//     }
//     pay(amountInDollars) {
//         console.log(`${this.user} made payment of $${amountInDollars} Cash`)
//     }

// }

// const purchase = new Purchases(new StripePaymentProcessorFor('Alice'));
// const purchase2 = new Purchases(new PaypalPaymentProcessorFor('Bob'));
// const purchase3 = new Purchases(new CashPaymentProcessorFor('Charlie'));
// const purchase4 = new Purchases(new StripePaymentProcessorFor('Chaplin'));
// purchase.purchaseBike(2);
// purchase2.purchaseHelmet(2)
// purchase3.purchaseBike(7);
// purchase4.purchaseCandy(5);
