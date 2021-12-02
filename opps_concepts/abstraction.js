//hide the properties of the object 
// replace "this" with "let" to hide the methods
function Circle(radius){
    this.radius = radius;
    let defaultLocation = { x:1, y :0}
    let computeOptimumLocation = function(n){
        if(n == 1){
        return defaultLocation.x;
        }
        else{
            return defaultLocation.y;
        }
    }
    //closure function
this.draw = function(){
    console.log(computeOptimumLocation(0));
    //defaultLocation
    //this.radius 
    console.log("draw");
};
}

const circle = new Circle(10);
circle.draw();