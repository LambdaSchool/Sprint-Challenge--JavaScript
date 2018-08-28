// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
// function CuboidMaker(properties) {
//     this.length = properties.length;
//     this.width = properties.width;
//     this.height = properties.height;
// }

class CuboidMaker {
    constructor(properties) {
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    }

    volume() {
        return `${ this.length * this.width * this.height }`
    }

    surfaceArea() {
        return `${ 2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`
    }
}
// CuboidMaker.prototype.volume = function() {
//     return `${ this.length * this.width * this.height }`
// };
//
// CuboidMaker.prototype.surfaceArea = function() {
//     return `${ 2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`
// };

class Cuboid extends CuboidMaker {
    constructor(cuboid){
        super(cuboid);
    }
}
const cuboid = new Cuboid({
    length: 4,
    width: 5,
    height: 5
});
console.log(cuboid);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

class CubeMaker extends CuboidMaker {
    constructor(cube) {
        super(cube);
    }
    cubeVolume() {
        return `${ this.width ** 3}`
    }

    cubeSurfaceArea() {
        return `${ 6 * (this.width * this.width)}`
    }
}

const cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3
})
console.log(cube);
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());
/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.
  completed
  volume cube = s^3
  surface area cube = 6s^2

*/
