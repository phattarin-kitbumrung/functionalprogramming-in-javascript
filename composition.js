const toUpperCase = text => text.toUpperCase()
const textToArray = text => text.split('')
const reverseArray = text => text.reverse()

console.log(
  reverseArray(
    textToArray(
      toUpperCase(myName)
    )
   )
)

// ["Y", "O", "T", "S", "L", "O", "T"]
