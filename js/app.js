'use strict'

function add(a, b){
    return a + b
}

function makeAdd(a){
    return function(b){
        return a + b
    }
}

var add10 = makeAdd(10)

console.log(add10(1));
console.log(add10(12));
console.log(add10(-3));


function makeSubtract(a){
    return function(b){
        return a - b
    }
}

var subtract10 = makeSubtract(10)

console.log(subtract10(5));
