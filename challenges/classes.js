// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker{
  constructor(length, width, height){
    super(length, width, height);
  }

  isCube() {
    //If only 1 number in input, takes it as the size of the cube. 
    //If 3 number are input, check if they're equal. If they're not return statement this is not a cube.
    return ((this.length && !this.width && !this.height) || (this.length === this.width && this.width === this.height)) ? true : false;
  }

  cubeVolume() {
    return this.isCube() ? this.length**3 : `This is not a cube.`;
  }

  cubeSurfaceArea() {
    return this.isCube() ? (this.length**2)*3 : `This is not a cube.`;
  }
}
//3 inputs
const cube = new CubeMaker(4,4,4);

console.log(cube.cubeVolume()); // 64
console.log(cube.cubeSurfaceArea()); // 48

//1 inputs
const cube2 = new CubeMaker(2);
console.log(cube2.cubeVolume()); // 8
console.log(cube2.cubeSurfaceArea()); // 12

//wrong inputs
const cube3 = new CubeMaker(2,3,4);
console.log(cube3.cubeVolume()); // 8
console.log(cube3.cubeSurfaceArea()); // 12