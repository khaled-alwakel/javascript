const weekDays = [
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];
const weekEnd = ["saturday", "sunday"];

// map always return an array with the same length of old map
const workingDaysMap = weekDays.map((day) => {
  if (!weekEnd.includes(day)) return day;
  else return `${day} is week end`; // if not this it will return undefined
});
console.log(workingDaysMap);

// FOREACH ALWAYS RETURN UNDEFINED
// here if i use the implementation like map it will return all undefined [[ forEach DO A FUNCTION ON EVERY ELEMENT NOT RETURN NEW ARRAY]]
const workingDaysForEach = [];
weekDays.forEach((day) => {
  if (!weekEnd.includes(day)) workingDaysForEach.push(day);
});
console.log(workingDaysForEach);


