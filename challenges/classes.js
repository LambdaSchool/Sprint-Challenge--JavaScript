// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {return this.length * this.width * this.height};
  surfaceArea() {return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)};
}

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.


  //!--- Since cubes are a subset of cuboids, they do not need their own methods to calculate volume and surface area.  The formulae can be simplified for cubes, though, and the cube methods may be computationally lighter.

*/

class CubeMaker extends CuboidMaker {
  constructor(side) {super(side, side, side)};
  volume() {return Math.pow(this.length, 3)};
  surfaceArea() {return Math.pow(this.length, 2) * 6};
}

const cube = new CubeMaker(5);
console.log(cube.volume());
console.log(cube.surfaceArea());
