 const sayHello = function(hello = 'Hello ', endMark = '!'){
    const text = hello + this.firstName + ' ' + this.lastName + endMark
    console.log(text);
 }

sayHello()

const me = {
    firstName: 'Mateusz',
    lastName: 'Choma',
    sayHello: sayHello,
}

me.sayHello('Cześć ', '!!!')

const person1 = {
    firstName: 'Ala',
    lastName: 'Kotowicz',
}

// wywołuje funkcje z nowym kontekstem
sayHello.call(person1, 'Cześć ', '!!!')
sayHello.apply(person1, ['Cześć ', '!!!']) // for apply as a second argument you have to give array with arguments inside
const args = ['Cześć ', '!!!']
sayHello.apply(person1, args)

// bounded function cant change context from now
// bind nie wywołuje funkcji ale zwraca funkcje przypisana do nowej zmiennej z kontekstem podanym jako argument
const sayHelloBound = sayHello.bind(person1)


const person2 = {
    firstName: 'Ola',
    lastName: 'Jakaś',
}
sayHelloBound()
sayHelloBound('Cześć ', '!!!')

// context didn't change
sayHelloBound.call(person2)
sayHelloBound.apply(person2)
sayHelloBound.call(person2, 'Cześć ', '!!!')
sayHelloBound.apply(person2, ['Cześć ', '!!!'])
