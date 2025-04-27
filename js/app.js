 const sayHello = function(){
    const text = 'Hello ' + this.firstName + ' ' + this.lastName
    console.log(text);
 }

sayHello()

const me = {
    firstName: 'Mateusz',
    lastName: 'Choma',
    sayHello: sayHello,
}

me.sayHello()

const person1 = {
    firstName: 'Ala',
    lastName: 'Kotowicz',
}

// wywołuje funkcje z nowym kontekstem
sayHello.call(person1)
sayHello.apply(person1)

// bounded function cant change context from now
// bind nie wywołuje funkcji ale zwraca funkcje przypisana do nowej zmiennej z kontekstem podanym jako argument
const sayHelloBound = sayHello.bind(person1)


const person2 = {
    firstName: 'Ola',
    lastName: 'Jakaś',
}
sayHelloBound()

// context didn't change
sayHelloBound.call(person2)
sayHelloBound.apply(person2)
