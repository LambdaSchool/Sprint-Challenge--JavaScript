// Copy and paste your prototype in here and refactor into class syntax.
class cuboid {
  constructor(cuboidStats) {
  this.length = cuboidStats.length;
  this.width = cuboidStats.width;
  this.height = cuboidStats.height;
  }
  volume() {
    length * width * height;
    return volume
  }
  surfaceArea() {
     2 * (length * width + length * height + width * height);
     return surfaceArea;
  }
}

const cube = new cuboid({
  length: 4,
  width: 5,
  height: 5
});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/