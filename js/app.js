'use strict'

;(function(numbersAmount){

var sum = 0

for(let i=0; i < numbersAmount; i++){
    var numberFromUser = getNumberFromUser()
    sum = add(sum, numberFromUser)
}

function getNumberFromUser(){
    return Number(prompt('Please type number!'))
}

function add(a, b){
    return a + b
}

function showResult(sum){
    if(sum || sum === 0){
        alert('Result: ' + sum);
    } else {
            alert('Sorry, you provided not a number!')
    }
}

showResult(sum)
})(2)

