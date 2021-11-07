n = 98;
var sum = 0;
for (let i = 1; i <= n; i++) {
    
    // num += i%2 == 0 ? 0 : i
    if (i%2==1)
    {
        sum = sum + i; 
    }
}
console.log(sum);