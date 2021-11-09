// factory function
//return an object
function createCircle(radius){
    return {
        radius,
        draw : function(){
            console.log("method");
        }
    };
}

const circle = createCircle (1);

//Constructor Function
//constructor function starts with a capital with "this"operator and new keyword
function Circle(radius){
    console.log("this", this);
    this.radius = radius;
    this.draw = function (){
        console.log("this method doesnt need a return")
    }
}
const another = new Circle(1);