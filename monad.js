/* 
1. Maybe Monad:
The Maybe monad handles computations that may result in a value or no value (null or undefined). 
It provides a way to safely perform computations on nullable values without explicitly checking for null or undefined. 
*/

class Maybe {
    constructor(value) {
      this.value = value
    }
    
    static unit(value) {
      return new Maybe(value)
    }
    
    bind(transform) {
      return this.value ? transform(this.value) : Maybe.unit(null)
    }
}  
// Example usage
const maybeValue = Maybe.unit(5)
    .bind(value => Maybe.unit(value * 2))
    .bind(value => Maybe.unit(value + 3))
  
console.log(maybeValue.value) // Output: 13


/* 
2. Either Monad:
The Either monad represents computations that can result in one of two alternative outcomes: success (Right) or failure (Left). 
It is often used for error handling or handling alternative computation paths. 
*/

class Either {
    constructor(value) {
      this.value = value
    }
    
    static unit(value) {
      return new Right(value)
    }
    
    bind(transform) {
      return this.value instanceof Left ? this : transform(this.value)
    }
}
  
class Left extends Either {
    constructor(error) {
      super(error)
    }
}
  
class Right extends Either {
    constructor(value) {
      super(value)
    }
}
// Example usage
function divide(a, b) {
    if (b === 0) {
      return new Left("Division by zero is not allowed")
    } else {
      return new Right(a / b)
    }
}
  
const result = Either.unit(10)
    .bind(value => divide(value, 2))
    .bind(value => divide(value, 5))
  
if (result instanceof Left) {
    console.log(result.value) // Output: Division by zero is not allowed
} else {
    console.log(result.value) // Output: 1
}
  