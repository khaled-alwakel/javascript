//* ======== assignments 38 - 39

let day = "Wednesday";
// You Need To Remove Spaces And Make First Letter Capital => Friday

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10: 00 AM To 7: 00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
}

//============================================

//CHALLENGE

// switch challenge
let job = "Manager";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}

// from if to switch solution
switch (job) {
    case "Manager":
        salary = 8000;
        console.log(salary);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(salary);
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(salary);
        break;
    default:
        salary = 4000;
        console.log(salary);
}
//================================
/**
 * if challenge
 */
let holidays = 0;
let money = 0;
switch (holidays) {
    case 0:
         money = 5000;
        console.log(`my money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`my money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`my money is ${money}`);
        break;
}
// from switch to if solution

if (holidays == 0) {
    money = 5000;
    console.log(`my money is ${money}`);
} else if (holidays == 1 || holidays == 2) {
    money = 3000;
    console.log(`my money is ${money}`);
} else if (holidays == 3) {
    money = 2000;
    console.log(`my money is ${money}`);
}