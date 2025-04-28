const showAllArguments = function(){
    console.log(arguments)
}

showAllArguments(1, 'Mateusz', {})

const showAllArgumentsArrow = () => console.log(arguments)

// showAllArgumentsArrow(1, 'Mateusz', {})   = arguments is not defined

const Greeter = function(name){
    this.name =  name
}

Greeter.prototype.sayHello = function(){
    console.log('Hello ' + this.name);
}

const greeter1 = new Greeter('Bartek')


const GreeterArrow = (name) => {
    this.name = name
}

// GreeterArrow.prototype.sayHello = function(){     Cannot set properties of undefined (setting 'sayHello')
//     console.log('Hello ' + this.name);
// }

// THIS COMES FROM LEXICAL SCOPE IN ARROW FUNCTION



// regular fn
const sayHello = function(){
    console.log('Hello ' + this.name);
}
sayHello.call({name: "Bartek1"})
sayHello.apply({name: "Bartek2"})
const sayHelloBound = sayHello.bind({name: "Bartek3"})
sayHelloBound()




// arrow fn
const sayHelloArrow = () => {
    console.log(this)
    console.log('Hello ' + this.name);
}

sayHelloArrow.call({name: "Bartek1"})
sayHelloArrow.apply({name: "Bartek2"})
const sayHelloArrowBound = sayHelloArrow.bind({name: "Bartek3"})
sayHelloArrowBound()