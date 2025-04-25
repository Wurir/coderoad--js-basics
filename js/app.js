'use strict'

var num1 = Number(prompt('Please type number!'))
var num2 = Number(prompt('Please type second number!'))

function add(a, b){
    return a + b
}

var sum = add(num1, num2)

if(sum || sum === 0){
    alert('Result: ' + sum);
} else {
        alert('Sorry, you provided not a number!')
}
