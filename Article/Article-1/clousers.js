/* function User(name) {
  var displayName = function (greeting) {
    console.log(greeting + ' ' + name)
  }
  return displayName
}
var myFunc = User('Raj')
myFunc('Welcome ') //Output: Welcome Raj
myFunc('Hello ') //output: Hello Raj */

//! The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

/* var myModule = (function () {
  'use strict'

  var _privateProperty = 'Hello World'

  function _privateMethod() {
    console.log(_privateProperty)
  }

  return {
    publicMethod: function () {
      _privateMethod()
    }
  }
})()

myModule.publicMethod() // outputs 'Hello World'
console.log(myModule._privateProperty) // is undefined protected by the module closure
// myModule._privateMethod() // is TypeError protected by the module closure
 */

console.log(Hoist)
var Hoist = 'The variable Has been hoisted'
//output : undefined//
