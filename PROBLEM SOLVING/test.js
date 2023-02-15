let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 1000);
});

// reject runs the second function in .then
promise.then(
  (result) => console.log(result), // doesn't run
  (error) => console.log(error) // shows "Error: Whoops!" after 1 second
);
