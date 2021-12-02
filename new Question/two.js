let a =[{
    "name" : "fkdslk",
    "age" : 44
},
{
    "name" : "fkdslk",
    "age" : 45
},
{
    "name" : "fkdslk",
    "age" : 46
}
]
function getValues1 (str){

return a.map(ele => ele[str])

}
console.log(getValues1("age"))