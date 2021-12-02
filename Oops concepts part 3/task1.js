function Shape(name,sides,sideLength){
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength
}

Shape.prototype.calcPerimeter = function(){
    let  finalPerimeter = this.sides *this.sideLength;
    console.log(finalPerimeter);

}

let square = new Shape("square", 4, 5)

let triangle = new Shape("triangle",3,5)

square.calcPerimeter();

triangle.calcPerimeter()
