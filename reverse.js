function reserve(a){
    var e = [];
    var l = a.length;
    for (let i = 0; i < a.length; i++) {
        e.push(a[l-1])
        l--;
        
    }
    console.log(e)
}

reserve([2,3,4,5])