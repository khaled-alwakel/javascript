// try catch and finally
try {
  console.log("start of try runs");
  unicycle();
  console.log("End of try runs -- never reached");
} catch (error) {
  console.log(`Error has occurred ${error.stack}`);
} finally {
  console.log("this is always run");
}
console.log(".... then the execution continues ");
