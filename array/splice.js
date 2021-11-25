let newArray = ["jan", "feb", "mar","april", "may", "june", "aug", "septemper", "november", "december"]
 newArray.splice(8,0,"october")
 newArray.splice(6,0,"july")
 newArray.splice(11,1)
console.log(newArray)

let myFish = ['angel', 'clown', 'trumpet', 'sturgeon','angel', 'clown', 'trumpet', 'sturgeon']
let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

console.log(myFish)
console.log(removed)

console.log(myFish.indexOf("trumpet"))


// splice gives a removed items in another array 
// splice start value , delete count, n number of items to be added to the orginal array 