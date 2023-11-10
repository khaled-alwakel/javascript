//* THIS KEYWORD
"use strict"; //* IT'S USEFUL TO PREVENT US FROM MODIFYING THE GLOBAL OBJECT

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};
const c = new Circle();
const draw = c.draw;

// METHOD CALL
c.draw; // [THIS] WILL POINT TO THE OBJECT C

// FUNCTION CALL
// draw() // [THIS] WILL POINT TO THE GLOBAL OBJECT  [ WINDOW ON BROWSER GLOBAL ON NODE ] but not in [strict mode ]

// * WHAT ABOUT ES6  [[ USE STRICT BY DEFAULT ]]

class Square {
  draw() {
    console.log(this);
  }
}
const sq = new Square();
const sqDraw = sq.draw;
draw();
