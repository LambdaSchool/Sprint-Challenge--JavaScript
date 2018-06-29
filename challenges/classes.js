// Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboiMaker {
  constructor(prop){
    this.length = prop.length;
    this.width = prop.width;
    this.length = prop.length;
  }

  volume(L,W,H) {
    console.log(L * W * H);
  }

  surfaceArea(L,W,H) {
    console.log(2 * (L * W + L * H + W * H));
  }
}


const cube1 = new CuboiMaker({
  'length':4,
  'width': 5,
  'height':5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
cube1.volume(4,5,5); // 100
cube1.surfaceArea(4,5,5); // 130




/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/