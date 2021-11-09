// factory function
function createCircle(radius){
    return {
        radius,
        draw : function(){
            console.log("method");
        }
    };
}

const circle = createCircle (1);
circle.draw();