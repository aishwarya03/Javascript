function uppercase1(str){
    if(str!=" ")
{
    var v = str.split(" ");
    //console.log(v)
    var arr = [];
    for (let i = 0; i < v.length; i++) {
      //console.log(v[i]);
      arr.push(v[i].charAt(0).toUpperCase() + v[i].slice(1));
        
    }
    return arr.join(" ");
    
}
}

console.log(uppercase1("hello, how are you?"));
console.log(uppercase1("the koala is spilling all the eucaplytus oil"));
