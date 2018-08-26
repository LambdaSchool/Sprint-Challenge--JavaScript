// Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

function CuboidMaker(cuboidAttributes) {
  this.length = cuboidAttributes.length;
  this.width = cuboidAttributes.width;
  this.height = cuboidAttributes.height
}

CuboidMaker.prototype.volume = function() {
  return (this.length*this.width*this.height);
}

CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
})

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130




// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/