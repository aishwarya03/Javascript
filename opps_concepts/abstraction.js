//hide the properties of the object 
// replace "this" with "let" to hide the methods
function Circle(radius){
    this.radius = radius;
    let defaultLocation = { paid:1, notPaid :0}
    let computeOptimumLocation = function(fees){
        if(fees == 1){
        return defaultLocation.paid;
        }
        else{
            return defaultLocation.notPaid;
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