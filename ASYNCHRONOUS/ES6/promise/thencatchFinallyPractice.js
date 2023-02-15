/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successful Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successful Or Failed Finally Do Something
*/

const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let employees = ["alice", "bob", "charlie", "tom"];
    if (employees.length === 4) {
        resolveFunction(employees);
    } else {
        rejectFunction(Error("Number Of Employees Is Not 4"));
    }
});

myPromise
    .then((resolveValue) => {
        resolveValue.length = 2;
        return resolveValue; // pass to next then . like call back 
    })
    .then((resolveValue) => {
        resolveValue.length = 1;
        return resolveValue;
    })
    .then((resolveValue) => {
        console.log(`The Choosen Employee Is ${resolveValue}`);
    })
    .catch((rejectedReason) => console.log(rejectedReason))
    .finally(console.log("The Operation Is Done"));