var person1 = {
    firstName: 'Mateusz',
    lastName: 'Choma',
}

var person2 = {
    firstName: 'Alicja',
    lastName: 'Kotowicz',
}

var people = [person1, person2, person2]

person2.firstName = "Ala"

people[2].name = people[2].firstName + " " + people[2].lastName

console.log(person1);
console.log(person2);

console.log(people);