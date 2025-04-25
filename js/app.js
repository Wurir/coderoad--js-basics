'use strict'

// function declaration / statement
function add(a, b){
    return a + b
}


// named function expression
var addExpression = function addExpression(a, b){
    return a + b
}

// anonymous function expression
var addAnonymousExpression = function(a, b){
    return a + b
}

var namedFunctionVariable = function nameOfFunc(){
    // named function name is available in local scope
    console.log(nameOfFunc);
}

console.log(typeof nameOfFunc); // undefined
