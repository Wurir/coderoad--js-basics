'use strict'

console.log('before alert');

var alertResult = alert('Hello')

console.log('after alert', alertResult);


console.log('before confirm');

var confirmResult = confirm('confirm')

console.log('after confirm', confirmResult);

console.log('before prompt');

var promptResult = prompt('prompt')

console.log('after prompt', promptResult);