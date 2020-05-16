// 1. Copy and paste your prototype in here and refactor into class syntax.

function CupoidMaker(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  
  CupoidMaker.prototype.volume = function () {
      return (length*width*height);
  };


  class CupoidMaker {
      constructor(attributes) {
          this.length = attributes.length;
          this.width = attributes.width;
          this.height = attributes.height;
      }
      volume() {
          return (length*witdth*height)
      }
  }
 


// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.