
// get the volume of cylinder using class
class Cylinder {
 
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
        this.pi = 3.14159;
    }
    calculateVolmun (){
        return 1/2*this.radius*this.radius*this.pi;
    }

}
const cylOne = new Cylinder (5,15);
console.log(cylOne.calculateVolmun().toFixed(4));