// Copy and paste your prototype in here and refactor into class syntax.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
  constructor(objCMaker){
    this.length = objCMaker.length;
    this.width = objCMaker.width;
    this.height = objCMaker.height;
  }
  
  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  }
}


const newCubeoid = new CuboidMaker({
  length: 4,
  width: 5,
  height:5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCubeoid.volume()); // 100
console.log(newCubeoid.surfaceArea()); // 130


/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker{

  constructor(objCMaker){
    super(objCMaker)
  }

  //dont need to declare volume as it is the same as the Cuboid and since it extends it should inherit

  surfaceArea(){
    console.log("using 2nd");
    return ((2 * (this.width * this.length)) + (2 * (this.width * this.height)) + (2 * (this.length * this.height)));
  }
}

const newCube = new CubeMaker({
  length: 4,
  width: 5,
  height:5
})

console.log(newCube.volume());
console.log(newCube.surfaceArea().toString());
