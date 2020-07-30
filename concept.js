// 1. Pure Function
function addPure(a,b){
    return a + b
}
console.log('Pure Function: ', addPure(8,8))


// 2. Avoid Side Effect
const b = 16
function addSideEffect(a){
    return a + b
}
console.log('Side Effect: ', addSideEffect(1))


// 3. First Class Function
// 3.1 Assigning function to a variable
const addAssigning = function(a,b){
    return a + b
}
console.log('Assigning: ', addAssigning(9,9))

// 3.2 Returning a function
function addReturning(a,b){
    return function(){
        return a + b
    }
}
const addTwoNumber = addReturning(1,6)
console.log('Returning: ', addTwoNumber())

// 3.3 Accepting a function as argument
function addNumber(a,b){
    return a + b
}
function addAccepting(add,a,b){
    return add(a,b)
}
console.log('Accepting: ', addAccepting(addNumber,1,6))