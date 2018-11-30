console.log("=====================================================Classes.js===================================================")

class CuboidMakerTwo {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.heigth = height;
    }

    volume() {
        return this.length * this.width * this.heigth;
    }

    surfaceArea() {
        //length: 4, width: 5, and height: 5
        let result = (this.length * this.width) + (this.length * this.heigth) + (this.width * this.heigth);
        return result * 2;
    }
}



let cuboidTwo = new CuboidMakerTwo(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension 
//properties from CuboidMaker.  Test your work by logging out your volume and surface area.


//if you comment the methods in the child class, you will get the same results because the child class is inheriting
// the methods from the parent class.
console.log("=======stretches=======")
class CubeMaker extends CuboidMakerTwo {
    constructor(width, heigth) {
        super(width, heigth);
        this.width = width;
        this.heigth = heigth;
    }

    surfaceArea() {
        return 6 * (this.width * this.heigth);
    }

    volume() {
        return this.width ** 3;

    }
}
let cube = new CubeMaker(4, 4);
console.log(cube.surfaceArea());
console.log(cube.volume());

