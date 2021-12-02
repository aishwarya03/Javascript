function max(a,b)
{
    if(a==b)
         return a;
    else{
        if(a>b)
            return a;
        else
            return b;
       }
}
 
// Returns minimum number of platforms required
function findPlatform( arr, dep, n)
{
 
    // plat_needed indicates number of platforms
    // needed at a time
    var plat_needed = 0, result = 1;
    var i = 1, j = 0;
 
    // run a nested loop to find overlap
    for (var i = 0; i < n; i++) {
        // minimum platform
        plat_needed = 0;
 
        for (var j = i + 1; j < n; j++) {
            // check for overlap
            if ((arr[i] >= arr[j] && arr[i] <= dep[j]) ||
        (arr[j] >= arr[i] && arr[j] <= dep[i]))
                plat_needed++;
        }
 
        // update result
        result = max(result, plat_needed);
    }
 
    return result;
}
 
var arr = [30,0,60,500,10,5, ];
    var dep = [ 75,50,150 ,120,45,30];
    var n =6;
    
        console.log(findPlatform(arr, dep, n));