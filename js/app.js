'use strict'

const inc = function(){
    this.number++
}
    
const status = function(){
    console.log('Current number is: ' + this.number);
}

const counter1 = {
        number: 0,
        inc: inc,
        status: status,
    }
const counter2 = {
        number: 0,
        inc: inc,
        status: status,
    }
