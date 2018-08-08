// Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(properties){
  this.length = properties.length
  this.width = properties.width
  this.height = properties.height
}
vol(){
  return `Cuboid volume = ${this.length} * ${this.width} * ${this.height}`;
}
surfaceArea(){
  return `Surface Area = ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
}
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height
*/

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
let cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.vol()); //? 100
console.log(cuboid.surfaceArea()); //? 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(attributes){
  super(attributes);
  this.length = attributes.length
  }
  volume(){
    return `Volume = ${this.length**3}`
  }
  surfaceArea(){
    return `Surface area = ${6 * this.length**2}`;
  }
}
let deltoid = new CubeMaker ({
  length: 10
})

console.log(deltoid.volume()); //?
console.log(deltoid.surfaceArea()); //?