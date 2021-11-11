//map
// create new array from current araay 
// create array of company names.
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const companyNmaes = companies.map(function(company){
      return company.name;
  });
  console.log(companyNmaes);

  const nameCompany = companies.map(function(company){

    return `${company.name} [${company.start} - ${company.end}]`
  });
  console.log(nameCompany);

// using es6 arrow function
  const namCom = companies.map(comp => `${comp.name} [${comp.start}-${comp.end}]`);
  console.log(namCom);

  // square of the ages array 

const agessqur = ages.map(age => Math.sqrt(age));
console.log(agessqur);

//  multiple ages array by 2 

const agesbytwo = ages.map(age => age*2);
console.log(agesbytwo);

const agesqurandtwo = ages 
.map(age => Math.sqrt(age))
.map(age => age*2);

console.log (agesqurandtwo);
