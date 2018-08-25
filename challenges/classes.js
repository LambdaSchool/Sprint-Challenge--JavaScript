// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(cuboidOptions) {
    this.length = cuboidOptions.length;
    this.width = cuboidOptions.width;
    this.height = cuboidOptions.height;
  }
  
  volume() {
    return this.length * this.width * this.height;
  }
  
  surfaceArea() {
    return 2 * (this.length*this.width + this.length*this.height + this.width*this.height);
  }
}

// function CuboidMaker(cuboidObj) {
//   this.length = cuboidObj.length;
//   this.width = cuboidObj.width;
//   this.height = cuboidObj.height;
// }

// CuboidMaker.prototype.volume = function () {
//   return this.length * this.width * this.height;
// };

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length*this.width + this.length*this.height + this.width*this.height);
// };

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

   Formula for cube volume: side * side * side
   Formula for cube surface area: 6 * (side * side)

*/

class CubeMaker extends CuboidMaker {
  constructor(cubeOptions) {
    super(cubeOptions);
    this.side = cubeOptions.side;
  }
  
  volume() {
    return this.side * this.side * this.side;
  }
  
  surfaceArea() {
    return 6 * this.side * this.side;
  }
}

const cube = new CubeMaker({
  side: 3
});

console.log(cube.volume()); // 27
console.log(cube.surfaceArea()); // 54