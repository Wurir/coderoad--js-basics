'use strict'

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }


var displayNumbers = function innerName(i = 0){
    if(i >= numbers.length){
        return 
    }
    console.log(numbers[i])
    i++
    innerName(i)
}

var showNumbers = displayNumbers
displayNumbers = null

showNumbers(0)
