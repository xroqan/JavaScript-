console.log('HellO world !')

const add = (num1, num2) => num1 + num2
// console.log (add(5,7))
const additionalResult = add(5, 7)

const multiply = (num1,num2) => num1 * num2
 const multiplyResult = multiply (additionalResult,2)
  console.log(multiplyResult)
    
const Person = require('./person')

const Meetup = require ('./meetup')

const vusal = new Person('Vusal', 30)
const vasif = new Person('Vasif', 28)
printName = person => console.log(person.name, person.age)
 vusal.greet(vasif)
 const wtmb = new Meetup ('Uni Bamberg')
 vusal.attend(wtmb)
 vasif.attend(wtmb)
 wtmb.printAttendeeNames()