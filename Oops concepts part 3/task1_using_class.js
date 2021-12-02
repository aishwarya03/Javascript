

class Shape{
    constructor(name,sides,sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
}
Shape.prototype.calcPerimeter = function(){
    let  finalPerimeter = this.sides *this.sideLength;
    console.log(finalPerimeter);

}

class Square extends Shape{

    constructor(name,sides,sideLength){
        super(name,sides,sideLength)
    }
    calcArea(){
return  this.sideLength ** 2;
    }
}

// let square = new Shape("square", 4, 5)

// let triangle = new Shape("triangle",3,5)

// square.calcPerimeter();

// triangle.calcPerimeter()

let square = new Square("Square" , 4, 6);

console.log(square.calcArea())

square.calcPerimeter()