const myObj = {
    names: "Carshowrooms",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ],
    manufactureSummary : function(){
      let x;
      
  for (let i in myObj.cars) {
    //console.log(myObj.cars[i])
    x = myObj.cars[i].name;
    console.log(x);
  

    for (let j in myObj.cars[i].models) {
      //console.log(myObj.cars[i].models[j])

        x = myObj.cars[i].models[j];
        
        console.log(x);
    }
    }
}}
myObj.manufactureSummary();

