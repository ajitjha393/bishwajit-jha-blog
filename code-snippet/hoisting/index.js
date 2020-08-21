console.log(userName) // what will this print ?

var userName = "Hello"

// ---------- Hoisted Code ----------//

var username // initialized with undefined

console.log(username)

username = "Hello" // Here it is reassigned with 'Hello'

//  -------- Function Binding --------//

// Here I can use the function before declaring due to Hoisting
const sumOfTwoNumbers = addTwoNumbers(5, 6)

console.log(sumOfTwoNumbers) // Print  11 to the console

function addTwoNumbers(num1, num2) {
  return num1 + num2
}
