//singleton patterns becomes handy when you wanna limit the number of instances of an object to at most ONE

class singletonPattern {
  constructor() {
    if (singletonPattern.instance) {
      return singletonPattern.instance;
    }
    this.settings = {
      fontSize: "20 px",
      color: "#111",
      backgroundColor: "#fff",
      version: Math.floor(Math.random() * 1000),
    };
    // block modifications add , delete or update
    Object.freeze(this.settings);
    Object.freeze(this);
    singletonPattern.instance = this;
  }

  // get
  get(key) {
    return this.settings[key];
  }
}

const singleton = new singletonPattern();
const singleton2 = new singletonPattern();

singleton.settings.fontSize = "40px";
singleton.delete = function () {};
console.log(singleton);
console.log(singleton2);
