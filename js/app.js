'use strict'

console.log(a) // undefined

var a = 5

console.log(add(1,3)) // 4

function add(a, b){
    return a + b
}

console.log(addExpression(1, 3)) // Uncaught TypeError: addExpression is not a function

var addExpression = function(a,b){
    return a+ b
}