const horse = {
  firstName: "Bou",
  size: "Large",
  skills: ["Jousting", "Racing"],
  age: 7,
};

// instead of concat use this
const { firstName, size, skills } = horse;
console.log(`${firstName} is a ${size} horse and skilled at ${skills.join(" & ")}`);


class Home {
  constructor(payment, bank){
    this.payment = payment;
    this.bank = bank
  }
}