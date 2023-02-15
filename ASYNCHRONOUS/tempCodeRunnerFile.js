let pizza;

function orderPizza() {
    console.log('order pizza');
    setTimeout(() => {
        pizza = 'pizza icon';
        console.log(`${pizza} is reay`)
    }, 2000)
    console.log('pizza was ordered ')
}
orderPizza();
console.log('calling my friend')
console.log(`eat ${pizza}`);