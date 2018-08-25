// Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
// function CuboidMaker(obj){
//   this.length = obj.length;
//   this.width = obj.width;
//   this.height - obj.height;
// }

class CuboidMaker{
  constructor(obj){
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}

// CuboidMaker.prototype.volume = function(){
//   return this.length * this.width * this.height;
// }
// CuboidMaker.prototype.surfaceArea = function(){
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker. 
   Find out the formulas for volume and surface area for cubes and create those methods as well. 
    Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker{
  constructor(attributes){
    super(attributes);
    this.child = attributes.child;
  }
  cubeVolume(){
    return Math.pow(this.length,3)
  }
  cubeSurfaceArea(){
    return 6 * (Math.pow(this.length,2))
  }
}

const cube = new CubeMaker({
  length:4,
  width:4,
  height:4,
  child:"I am a child!"
})

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());
console.log(cube.child)