// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
  constructor(length, width, height){
  this.length = length; 
  this.width = width; 
  this.height = height; 
  }
  volume(){
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    let sum = 0; 
    sum += this.length * this.width + this.length * this.height + this.width * this.height; 
      return sum * 2; 
  }
}
 

let cuboid = new CuboidMaker(4, 5, 5); 

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/