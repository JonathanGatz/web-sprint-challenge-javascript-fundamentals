// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor (height, width, length) {
        this.height = height;
        this.width = width;
        this.length = length;
        
    }

    volume() {
        return (this.height * this.width * this.length);
    }
    
    surfaceArea() {
        return(2*((this.width * length) + (this.length * height) + this.width * height));
      }
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.