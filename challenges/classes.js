// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerCopy {
    constructor(cube) {
        this.length = cube.length;
        this.width = cube.width;
        this.height = cube.height;
    }
    volume() {
        return (this.length * this.width * this.height);
    }
    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

const cuboidcopy = new CuboidMakerCopy({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidcopy.volume()); // 100
console.log(cuboidcopy.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerCopy {
    constructor(subCube) {
        super(subCube);
    }
    subVolume() {
        return Math.pow(this.length, 3);
    }
    subSurfaceArea() {
        return (6 * (Math.pow(this.length, 2)));
    }
}

const cube = new CubeMaker({
    length: 4
});

console.log(cube.subVolume());
console.log(cube.subSurfaceArea());