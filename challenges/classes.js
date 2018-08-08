// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(cuboidAttributes) {
  this.length = cuboidAttributes.length;
  this.width = cuboidAttributes.width;
  this.height = cuboidAttributes.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker {
  constructor(cubeAttributes) {
    super(cubeAttributes);
  }
  volume() {
    return Math.pow(this.length, 3);
  }
  surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
}


const cuboid = new CuboidMaker ({
  "length": 4,
  "width": 5,
  "height": 5
});

const cube = new CubeMaker ({
  "length": 5,
  "width": 5,
  "height": 5
});

const giantCube = new CubeMaker ({
  "length": 5000,
  "width": 5000,
  "height": 5000
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
console.log(cube.volume());
console.log(cube.surfaceArea());
console.log(giantCube.surfaceArea());
