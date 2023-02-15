class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }
  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      this.logCaloriesSurplus();
    }
  }
  logCaloriesSurplus() {
    console.log("maximum calories exceeded");
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);

/**
 * this example here violate the single responsibility principle because it has two reasons to change
 * 1: if i want to change how we track calories
 * 2: if i wanna change how i inform the user
 */

//===== [SOLUTION : TAKE logCaloriesSurplus OUT OF CLASS AND MOVE IT IN SOMETHING ELSE  ]======/
