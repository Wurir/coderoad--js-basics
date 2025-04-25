'use strict'

var x = 1
var y = 2

if(x === y){
    console.log('prawda');
} else {
    console.log('fałsz');
}

if(x !== y) {
    console.log('Prawda, X nie jest rowne Y!');
} else {
    console.log('Fałsz, X jest rowne Y!'); 
}

var string = 'Hello'
var emptyString = ''

if(string){
    console.log('Prawda');
} else {
    console.log('Fałsz')
}

if(emptyString){
    console.log('Prawda');
} else {
    console.log('Fałsz')
}

function add(a, b){
    if(a === undefined){
        a = 0
    }
    if(b === undefined){
        b = 0
    }

    return Number(a) + Number(b)
}