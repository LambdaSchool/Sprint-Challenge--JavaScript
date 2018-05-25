// Copy and paste your prototype in here and refactor into class syntax.
class cuboidMaker {
  constructor(cuboidStats) {
  this.length = cuboidStats.length;
  this.width = cuboidStats.width;
  this.height = cuboidStats.height;
  }
  volume() {
    return this.length * this.width * this.height;
  
  }
  surfaceArea() {
     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
     
  }
}

class cubeMaker extends cuboidMaker {
  
}

const cube = new cuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/