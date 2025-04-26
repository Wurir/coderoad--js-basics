'use strict'

const obj = {}
console.log(obj); // {}

obj.firstName = 'Bartek'
console.log(obj); // {firstName: 'Bartek'}

const obj2 = obj
obj2.firstName = 'Mateusz'
console.log(obj); // {firstName: 'Mateusz'}

console.log(obj2 === obj); // true
