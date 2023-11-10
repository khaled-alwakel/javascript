function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 1000);
  });
}

async function start() {
  const result = await getData(); // return the value
  console.log(result);
}

start();

/**========fetch======== */

async function fetchData() {
  const result = await fetch(
    "https://dog.ceo/api/breeds/pembroke/image/random"
  );
  console.log(result);
}

fetchData();
