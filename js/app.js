 const sayHello = function(){
    console.log(this);
    
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
 }

sayHello()

const me = {
    firstName: 'Mateusz',
    lastName: 'Choma',
    sayHello: sayHello,
}

me.sayHello()

const person = {
    firstName: 'Ala',
    lastName: 'Kotowicz',
}

sayHello.call(person)

