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

var name = 'Bisu'

function greet() {
	var name = 'Aju'
	console.log(name)
}

greet()
console.log(name)