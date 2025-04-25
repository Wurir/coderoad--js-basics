'use strict'

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < numbers.length; i++){
//     console.log('#1. Start of iteration: ' + i);

//     var number = numbers[i]
//     if(number < 6){
//         console.log(number);
//     }
    
// }

// for(var j = 0; j < numbers.length; j++){
//     console.log('#2. Start of iteration: ' + j);
//     var number = numbers[j]

//     if(number < 6){
//         console.log(number);
//     } else {
//         break
//     }
// }

for(var k = 0; k < numbers.length; k++){
    console.log('#3. Start of iteration: ' + k);
    var number = numbers[k]

    if(number % 2 === 0){
        continue
    } 
    
    console.log(number);
}