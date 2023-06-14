const curriedAdd = a => b => a + b 

const plus10 = curriedAdd(10)

console.log(plus10(20))
// 30

console.log(plus10(40))
// 50

const curriedMap = mapFn => items => {
    let newList = []
    for(let i = 0; i < items.length; i++) {
      newList.push(mapFn(items[i]))
    }
    return newList
}
  
const itemsOne = [1, 2, 3, 4, 5]
const itemsTwo = [10, 20, 30, 40, 50]
  
const doubleItems = curriedMap(item => item * 2)
const tripleItems = curriedMap(item => item * 3)
  
console.log(doubleItems(itemsOne))
// [2, 4, 6, 8, 10]
  
console.log(doubleItems(itemsTwo))
// [20, 40, 60, 80, 100]
  
console.log(tripleItems(itemsOne))
// [3, 6, 9, 12, 15]
  
console.log(tripleItems(itemsTwo))
// [30, 60, 90, 120, 150]
  