const add = function(a, b){
    return a + b
}
console.log(add(2, 4))

const addArrow1 = (a, b) => a + b

const addArrow2 = (a, b) => {
    return a + b
}

const addArrow3 = (a, b) => (a + b)

console.log(addArrow1(2, 4))
console.log(addArrow2(6, 3))
console.log(addArrow3(6, 3))

function validateAndAdd(a, b){
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers')
    }
    console.log(a + b); 
}

validateAndAdd(2, 4)

const validateAndAddArrow = (a, b) => {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers')
    }
    console.log(a + b); 
}
validateAndAddArrow(6, 6)

const oneArgument = a => console.log(a)

oneArgument('Hello')