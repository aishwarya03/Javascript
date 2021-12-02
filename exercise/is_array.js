let is_array = function(input){
    if(toString.call(input) === "[object Array]"){
        
        return true ;
    }
    return false;
};
is_array = [1,2,3,4,5]
  console.log(Array.isArray(is_array))  


// console.log(is_array([1,2,3,4,5]));
// console.log(is_array("what"));