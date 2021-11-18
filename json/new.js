let jsson = require("./user.json")
//console.log(jsson);
//console.log(jsson.features[0].properties.code);
jsson.features[0].properties["point"] = 34.56;
console.log(JSON.stringify(jsson));
// jsson.features.forEach(element => {
//     if(element.properties.mag > 4){
//     console.log(element.properties.place);
// }
    
// }
// );

