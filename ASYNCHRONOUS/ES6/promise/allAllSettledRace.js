/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Iam The First Promise");
    }, 5000);
});
  
const mySecondPromise = new Promise((res, rej) => {
    setTimeout(() => {
      rej("Iam The Second Promise");
    }, 1000);
});
  
const myThirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Iam The Third Promise");
    }, 2000);
});

//* reject one only reserve all
//   Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (resolvedValues) => console.log(resolvedValues), // combine all resolvedValues in array
//     (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
//   );

// //* all anyways
// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
// (resolvedValues) => console.log(resolvedValues),
// (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );
  //* first one only res or  
  Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues),
    (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
  );