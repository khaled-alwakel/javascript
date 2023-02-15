class Store {
    constructor(user) {
        // this.stripe = new Stripe();
        this.user = user
        this.paypal = new Paypal()
    }
    purchaseBike(quantity) {
        this.paypal.makePayment(this.user, 200 * quantity)
            // this.stripe.makePayment(this.user, 200 * quantity * 100)
    }
    purchaseHelmet(quantity) {
        // this.stripe.makePayment(this.user, 15 * quantity * 100)
        this.paypal.makePayment(this.user, 15 * quantity)
    }
}



class Stripe {
    makePayment(user, amountInCents) {
        console.log(`${user} made payment of $${amountInCents*100} with stripe`)
    }
}
class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} with paypal`)
    }
}
const store = new Store('Alice');
store.purchaseBike(2);
store.purchaseHelmet(2)

/**
  we can imagine in real store the amount of time that you have payment code is going to be a lot
  and also the number of methods inside those apis likes [strip & paypal] will be a lot more than one 
  
 and you can imagine the way  paypal does payments and the way strip does payments are going to be very different so making transition will be hard in most cases 
 
 ====[SOLUTION => INTERMEDIATE API  LIKE WRAPPER WRAP AROUND STRIP AND PAYPAL AND THE IDEA OF THIS WRAPPER IT HAS THE EXACT SAME FUNCTIONS THE EXACT SAME METHOD EXACT SAME INTERFACE

*/