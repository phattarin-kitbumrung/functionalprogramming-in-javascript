const persons = [
    { name:"John",  age:17 },
    { name:"Jane",  age:10 },
    { name:"Jim",  age:15 }
]

// map
const olderPersons = persons.map(person => 
    ({
        ...person,
        age: person.age * 2
    })
)
console.log("Older persons:", olderPersons)

// reduce
const totalAge = persons.reduce((age, person) => age + person.age, 0)
console.log("Total age:", totalAge)

// filter
const kids = persons.filter(person => person.age <= 15)
console.log("Kids:", kids)

//  forEach
persons.forEach(person => console.log(`Name: ${person.name}, Age: ${person.age}`))

// find
const jane = persons.find(person => person.name == 'Jane')
console.log("Jane:", jane)

// findIndex
const janeIndex = persons.findIndex(person => person.name == 'Jane')
console.log("Jane index:", janeIndex)

// every
let isKid = persons.every(person => person.age <= 17)
console.log("isKid:", isKid)

// some
isKid = persons.some(person => person.age <= 17)
console.log("isKid:", isKid)