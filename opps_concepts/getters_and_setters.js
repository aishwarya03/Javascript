function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 1, y: 1 }

    this.getdefaultLocation = function () {
        return defaultLocation;  //here we will have access to the defaultLocation
    };

    this.draw = function () {


        console.log("draw");
    };
    Object.defineProperty(this, 'defaultLocation', {
        // get is a keyword that is used to read the property defaultLocation
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error("invalid location");
            }
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
//circle.getdefaultLocation();
circle.draw();