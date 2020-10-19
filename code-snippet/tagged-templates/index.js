// const myDetails = {
//   firstName: "Bishwajit",
//   lastName: "Jha",
//   age: 20,
// }

// const intro =
//   "Hello My name = " +
//   myDetails.firstName +
//   " " +
//   myDetails.lastName +
//   ". And I am " +
//   myDetails.age +
//   " years old"

// console.log(intro)

const myDetails = {
  firstName: "Bishwajit",
  lastName: "Jha",
  age: 20,
}

const intro = `Hello My name = ${
  myDetails.firstName + " " + myDetails.lastName
}. And I am ${myDetails.age} years old`

// -----------------------------------------

// Tagged Templates

function productDescription(strings, productName, productPrice) {
  // Transformation logic

  let priceCategory = "Cheaply priced"

  if (productPrice > 30) {
    priceCategory = "Expensive"
  }

  return `The ${productName} is ${priceCategory}`
}

const prodName = "Laptop"
const price = "50"

const productOutput = productDescription`This product ${prodName} costs ${price}k Rupees`
console.log(productOutput)
