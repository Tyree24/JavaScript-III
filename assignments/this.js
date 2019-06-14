/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Object Binding
this is the object
* 2. Implict Binding
implicit binding occurs when dot notation is used to invoke a function.
* 3. New Binding

* 4. Explict Binding
Whenever javascript call .bind . call . apply, "this" is explicitly defined
* write out a code example of each explanation above
*/

// Principle 1
function myName(name) {
  console.log(this);
  return name;
}
myName("Tyree");
// code example for Window Binding

// Principle 2
const myObj = {
  greeting: "HI",
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello("Tyree");
//Line 24 defines 'name'//
// code example for Implicit Binding

// Principle 3
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

const coolDude = new Person("Tyree", "LeBeau");
// code example for New Binding

// Principle 4
const someObject = {
  name: "Tyree"
};
someObject.call(this, args);

//arg = arguement//
// code example for Explicit Binding
