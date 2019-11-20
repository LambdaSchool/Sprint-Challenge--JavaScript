// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.



/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker{
    constructor(attr){ 
        this.length = attr.length;
        this.height = attr.height;
        this.width = attr.width;
    }
    volume(){
        const volume = this.length * this.width * this.height
        return volume;
    }
    surfaceArea(){
        const surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
        return surfaceArea;
    }
}
 const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 4
})

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130




/* Refactored Code Above */

/* Original Code*/

/*
    function CuboidMaker(attr){
      this.length = attr.length;
      this.height = attr.height;
      this.width = attr.width;
    }

    CuboidMaker.prototype.volume = function(){
    const volume = this.length * this.width * this.height
    return volume;
    }


    CuboidMaker.prototype.surfaceArea = function(){
    const surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    return surfaceArea;
    }
*/
