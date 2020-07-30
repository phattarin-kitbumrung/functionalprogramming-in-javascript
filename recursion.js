// Factorial Problem
// f(1) = 1
// f(2) = 2 * f(1)
// f(3) = 3 * f(2)
// f(4) = 4 * f(3)
function factorial(n){
    if(n === 1) return 1
    return n * factorial(n-1)
}
console.log('Factorial :', factorial(4))

// Reverse String
// c => c
// bc => reverse(c) + b
// abc => reverse(bc) + a
function reverse(str){
    if(str.length === 1) return str
    const [firstCharactor] = str
    const remainingCharactors = str.substring(1)
    return reverse(remainingCharactors) + firstCharactor 
}
console.log('Reverse :', reverse('abc'))
