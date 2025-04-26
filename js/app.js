
const inc = function(){
    this.number++
}
const status = function(){
    console.log('Current number is: ' + this.number);
    return this.number
}

// constructor function
const Counter = function(name){
    // this points to newly created empty object
    // when is used with new keyword
    this.name = name
    this.number = 0
    this.inc = inc
    this.status = status
}

const counter1 = new Counter('counter1')
const counter2 = new Counter('counter2')

counter1.inc()
counter2.inc()
counter2.inc()

if(counter1.status() !== 1 ) throw new Error('Counter1 do not work')
if(counter2.status() !== 2 ) throw new Error('Counter2 do not work')