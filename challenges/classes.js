// Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
// function CuboidMaker(el1){
//   this.length = el1.length;
//   this.width = el1.width;
//   this.height = el1.height;
// }

// CuboidMaker.prototype.volume = function(){
//   console.log(this.length * this.width * this.height);
//   return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function(){
//   console.log(2 * (this.length * this.width + this.length * this.height + this.width * this.height));
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }
  class CuboidMaker{
    constructor(el1){
    this.length = el1.length;
    this.width = el1.width;
    this.height = el1.height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea(){
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }


const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
})





// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker {
  constructor(cubeElem){
    super(cubeElem);
    this.length = cubeElem.length;
    this.width = cubeElem.width;
    this.height = cubeElem.height;
  }
  volume(){
    return this.length ** 3;
  }
  surfaceArea(){
    return (6 * (this.length ** 2));
  }
}
const cube1 = new CubeMaker({
  length: 3,
  width: 3,
  height: 3
})
console.log(cube1.volume());
console.log(cube1.surfaceArea());
