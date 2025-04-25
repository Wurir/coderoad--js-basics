'use strict'

var names = ['Ala', 'Ola', 'Ela', 'Iza']
var numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < names.length; i++){
    console.log('For loop iteration: ' + names[i]);
}


var sum = 0
for(let j = 0; j < numbers.length; j++){
    sum += numbers[j]
}
console.log( sum );
