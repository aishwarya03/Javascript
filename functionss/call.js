var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting,dets) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName + ' '+ dets);
}

say.call(person1, 'Hello','today'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King
