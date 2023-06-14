// For example, the following shows an anonymous function that displays a message:
let show = function() {
    console.log('Anonymous function')
}
show()

// Using anonymous functions as arguments
setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000)

// Immediately invoked function execution
(function () {
    console.log('Immediately invoked function execution')
})()

let person = {
    firstName: 'John',
    lastName: 'Doe'
}
(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person)

// Using arrow functions
let add = (a, b) => a + b   
