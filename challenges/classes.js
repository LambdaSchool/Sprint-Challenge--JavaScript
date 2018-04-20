// Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker (options) {
//   this.length = options.length;
//   this.width = options.width;
//   this.height = options.height;
// }
// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// }
// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }
// let cuboid = new CuboidMaker ({
//   "length": 4,
//   "width": 5,
//   "height": 5
// });

class CuboidMaker {
  constructor(options) {
    this.length = options.length;
    this.width = options.width;
    this.height = options.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker ({
  "length": 4,
  "width": 5,
  "height": 5,
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
class CubeMaker extends CuboidMaker {
  constructor(options) {
    super (options);
  }
  volume() {
    return Math.pow(this.length, 3);
  }
  surfaceArea() {
    return 6 * (Math.pow(this.length, 2))
  }
}

let cube = new CubeMaker ({
  "length": 5,
  "width": 5,
  "height": 5
})

console.log(cube.volume()) // 125
console.log(cube.surfaceArea()) // 150
