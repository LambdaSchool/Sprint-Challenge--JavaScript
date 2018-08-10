// Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(dimensions) {
//   this.length = dimensions.length;
//   this.width = dimensions.width;
//   this.height = dimensions.height;
// }

// CuboidMaker.prototype.volume = function() {
//   return(this.length * this.width * this.height);
// }

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }


class CuboidMaker {
  constructor(dimensions) {
    this.length = dimensions.length;
    this.width = dimensions.width;
    this.height = dimensions.height;
  }
  volume() {
    return(this.length * this.width * this.height);
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(dimensions) {
    super(dimensions);
    this.length = dimensions.edgeLength;
    this.width = dimensions.edgeLength;
    this.height = dimensions.edgeLength;
  }
}

const cube = new CubeMaker ({
  edgeLength: 3
});

console.log(cube.volume());