function longest(str){
    var v = str.split(" ");
    var finalw = v[0];
//console.log(v);
for (let i = 0; i < v.length; i++) {
    //console.log(v[i]);
if (v[i].length > finalw.length)
{
    finalw = v[i]
}
    
}
return finalw;
}

console.log(longest("Web developt course in developing wordmanagement kola "));