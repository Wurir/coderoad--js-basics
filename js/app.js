var firstName = 'Mateusz'
var lastName = 'Choma'

var car =  {
    brand: 'Opel',
    model: 'Insignia',
}

var me  = {
    firstName: firstName,
    lastName: lastName,
    car: car,
}

me.name = me.firstName + " "+ me.lastName

firstName = 'Marek' // strings are passed by values

car.model = 'Adam' // objects are passed by reference

console.log(me);

