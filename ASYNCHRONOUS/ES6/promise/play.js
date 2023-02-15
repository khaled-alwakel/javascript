const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved Result From Promise");
    }, 2000);
  });
};

setTimeout(() => {
  console.log("Timer is done !");
  fetchData()
    .then((text) => {
      console.log(`\t${text} ❤️`);
      return fetchData();
    })
    .then((text2) => {
      console.log(`\t\t${text2} 🌹`);
    });
}, 5000);

console.log("Hello I'm A Synchronous Code!");
