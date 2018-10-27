// 1. Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(length, width, height) {
        return this.length * this.width * this.height;
      }
    surfaceArea(length, width, height) {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      }
  }
  
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  const cuboid = new CuboidMaker(4, 5, 5);
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(length, width, height) {
        super(length, width, height);

    }
    cubeVolume(length) {
    
        return Math.pow(this.length, 3);
    }
    cubeSurfaceArea(length) {
        return 6 * (Math.pow(this.length, 2));
    }
}

const cube = new CubeMaker(7, 7, 7);

console.log(cube.cubeVolume())
console.log(cube.cubeSurfaceArea())