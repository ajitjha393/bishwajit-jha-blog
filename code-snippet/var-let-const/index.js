var someVariable = 5
// This creates a variable named "someVariable" and assigns value of 5 to it

let someVariable_2 = 5
// Does the same thing as var (in this global scope)

const someVariable_3 = 6
// This creates a constant variable naed someVariable_3
//  and locks the value of 6 assigned to it

// Hence it is possibe to do this
someVariable = 7
console.log(someVariable) // will print 7 to the console

someVariable_2 = "Hello" // Notice here i changed from Number to Text , but its okay
console.log(someVariable_2) // will print "Hello" to the console

// But this will give error during execution

someVariable_3 = 8 // Throw err

// ----------------------------------

var name = "Bisu"

function greet() {
  var name = "Aju"
  console.log(name)
}

greet()
console.log(name)

// --------------------------

let name = "Bisu" // This is scoped globally

function greet() {
  let name = "Aju" // This is scoped as block level
  /*
		What this means is that variable name declared
		inside this scope shadows the variable that 
		is present in the global scope.

		Hence we see the specificity of let is more
		and due to which it doesn't override the 
		variable declared outside of this scope

	*/
  console.log(name)
  // Hence this will Print name "Aju"
}

greet()

console.log(name)
// Where as this will log "Bisu" to the console!

// ------------- var-prob.png -------------

var name = "Bisu"

if (name === "Bisu") {
  var hobbies = ["Sports", "Coding"]
  // This gets registered in the global scope and
  // hence accessible now even from outside this if body
  // which leads to ambiguity in the code

  console.log(hobbies)
}

console.log(name, hobbies)
// Hence now i can access hobbies here outside of the if body
