class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return "YOU ARE EXPELLED!!!!";
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return +(sum / this.scores.length).toFixed(2);
  }
  static EnrollStudents() {
    return "ENROLLING STUDENTS!";
  }
}

let firstStudent = new Student("Colt", "Steele", 1);

console.log(firstStudent);
firstStudent.addScore(13)
firstStudent.addScore(33)
firstStudent.addScore(121)
console.log(firstStudent);

console.log(firstStudent.calculateAverage());

// console.log(firstStudent.EnrollStudents()) //    be an error, because of the static method 
