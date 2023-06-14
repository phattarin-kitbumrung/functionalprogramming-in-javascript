// With Lazy Evaluation
function add(x) {
    console.log("executing add")
    return x + x
}
  
function multiply(x) {
    console.log("executing multiply")
    return x * x
}
  
function addOrMultiply(add, onAdd, onMultiply, t) {
    return add ? onAdd(t) : onMultiply(t)
}
  
console.log(addOrMultiply(true, add, multiply, 4))
console.log(addOrMultiply(false, add, multiply, 4))

// Output: 
/* 
executing add
8
executing multiply
16
*/


// Without Lazy Evaluation
function add(x) {
    console.log("executing add")
    return x + x
}
  
function multiply(x) {
    console.log("executing multiply");
    return x * x;
}
  
function addOrMultiply(add, onAdd, onMultiply) {
    return add ? onAdd : onMultiply;
}
  
console.log(addOrMultiply(true, add(4), multiply(4))); // 8
console.log(addOrMultiply(false, add(4), multiply(4))); // 16

// Output: 
/*
executing add
executing multiply
8
executing add
executing multiply
16
*/