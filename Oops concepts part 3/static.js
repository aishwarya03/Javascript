var y = 'Outer y';

class A {
  static field = 'Inner y';
  
  static doo (){
    var a = this.field;
    return a
  }
}

console.log(A.doo)
// var defined in static block is not hoisted
console.log(y);
// > 'Outer y'