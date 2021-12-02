
let library = [
    {
        author : "floe hakto",
        title : "Damn sweets!!",
        readingStatus : true
    },
    {
        author : "tankyu roop",
        title : "oil and vessel",
        readingStatus : true
    },
    {
        author : "kuttuko guguya",
        title : "bathroom tiles",
        readingStatus : false
    }
]

const bookStatus = library.filter(ele => ele.readingStatus == true)
const listBooks = library.filter(elem => elem.readingStatus == false)
console.log(listBooks)

console.log(bookStatus)