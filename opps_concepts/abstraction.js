//hide the properties of the object 
// replace "this" with "let" to hide the methods
function Circle(radius){
    this.radius = radius;
    let defaultLocation = { x:1, y :1}
    let computeOptimumLocation = function(factor){
        // . . .
    }


//closure function
this.draw = function(){
    computeOptimumLocation(0,1);
    //defaultLocation
    //this.radius 
    console.log("draw");
};
}

const circle = new Circle(10);
circle.draw();