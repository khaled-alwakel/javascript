const horse = {
  name: "Bou",
  size: "Large",
  skills: ["Jousting", "Racing"],
  age: 7,
};

// instead of concat use this
const { name, size, skills } = horse;
console.log(`${name} is a ${size} horse and skilled at ${skills.join(" & ")}`);
