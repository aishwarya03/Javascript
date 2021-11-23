
function sortedSquareArray(arrayList) {
    let a, b;
    
    // for (let i = 0; i < arrayList.length; i++) {
    //     a = arrayList[i]
    //     if (a < 0) {
    //         a = a * -1;
    //     }
    //     for (let j = 0; j < arrayList.length; j++) {

    //         if (i != j) {
    //             b = arrayList[j]
    //             if (b < 0) {
    //                 b = b * -1;
    //             }
    //             if (a == b) {
    //                 arrayList.splice(j, 1)
    //             }
    //         }
    //     }
    // }
    const squareArray = arrayList
        .map(element => Math.pow(element, 2))
        .sort((a, b) => a - b)
        let uniq = [...new Set(squareArray)];
    console.log(uniq);
}

let arrayList = [-9, -2, 0, 2, 3];


sortedSquareArray(arrayList);

