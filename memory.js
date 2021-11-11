var s = 'azerty';
var s2 = s.substr(0, 3); // s2 is a new string
// Since strings are immutable values,
// JavaScript may decide to not allocate memory,
// but just store the [0, 3] range.
console.log(s2);
console.log(s);
var a = ['ouais ouais', 'nan nan'];
var a2 = ['generation', 'nan nan'];
var a3 = a.concat(a2);
// new array with 4 elements being
// the concatenation of a and a2 elements.
console.log(a3)