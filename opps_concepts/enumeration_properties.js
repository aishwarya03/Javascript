function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("hello");
    }
}
const circle = new Circle(30);

// to enumerate all the memebers in an object use for in loop

for(let key in circle){
    //to display only the property not the function
    if(typeof circle[key] != 'function'){
        console.log(key, circle[key]);
    }
    
}

// to get all the keys of an object
// to have keys in an array use Object.keys() and pass the object circle 
const ke = Object.keys(circle);
console.log(ke);

// to check the existance of an property or method in an object  
// to find if an object has a given property us IN operator 

if ('radius' in circle){
    console.log("Circle has a radius");
}
