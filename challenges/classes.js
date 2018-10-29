// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(object) {
  this.length = object.length;
  this.width = object.width;
  this.height = object.height;
}
volume() {
  return this.length * this.width * this.height;
}
surfaceArea() {
  return 2 * ( (this.length * this.width) + (this.length * this.height) + (this.width * this.height));
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

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(cubeObject) {
    super(cubeObject);
    // isCube checks dimensions to determine if the object is a cube
    this.isCube = (this.length === this.height && this.length === this.width && this.height === this.width)
  }
  volume() {
    if (!this.isCube) return `You did not make a cube, use the CuboidMaker class instead`;
    else return this.length * this.width * this.height;
  }
  surfaceArea() {
    if (!this.isCube) return `You did not make a cube, use the CuboidMaker class instead`;
    else return 6 * (this.width * this.height);
  }
}

const cube = new CubeMaker({
  length: 4,
  width: 4,
  height: 4
})

const notCube = new CubeMaker({
  length: 3,
  width: 2,
  height: 6
})

console.log(cube.isCube);
console.log(cube.volume());
console.log(cube.surfaceArea());
console.log(notCube.isCube);
console.log(notCube.volume());
console.log(notCube.surfaceArea());
