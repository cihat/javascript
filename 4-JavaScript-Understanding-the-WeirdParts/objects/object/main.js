/* var person = new Object();

person["firstname"] = "John"
person["lastname"] = "Doe"

var firstNameProperty = "firstname"

console.log(person)
console.log(person[firstNameProperty])

console.log(person.firstname)
console.log(person.lastname)

person.address = new Object()
person.address.street = "111 Main St.";
person.address.city = "Istanbul";
person.address.state = "NY" */

/* var english = {
  greetings: {
    basic: 'Hello!'
  }
}
var spanish = {}

english.greetings.greet = "Hello"
spanish.greet = "Hola!"

console.log(english) */

//! JSON 
/* var objectLiteral = {
  firstname: 'John',
  isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral))

var jsonValue = JSON.parse('{"firstname":"John","isAProgrammer":true}')
console.log(jsonValue) */

//! JavaScript'de function'larda bir objectdir.
/* function greet() {
  console.log('Hi');
}

greet.language = 'Turkish'
console.log(greet.language) */


//! Function Expression --- TAnımlandığından daha önce çağırılırsa hata verir!!! Bir primitive value gibi.
/* var anonymousGreet = function() {
  console.log('Hi!')
}
anonymousGreet()

var value = "John"
console.log(value)

function log(callback) {
  callback()
}

log(() => {
  console.log('Hi!!!')
}) */

//! primitive value'larda referance farklıdır ama bu objectler'de boyle değildir reference aynıdır yaptığın değişiklik ilgili her noktayı etkiler !!!DİKKAT ETTT.
let a = 123;
let b;
b = a;
b = 1;
console.log("b değeri: ", b)
console.log("a değeri: ", a)

//! by reference (all objects (including functions))
var c = {
  greeting: 'Hi..',
}
var d;

d = c;
d.greeting = 'Merhaba' //! mutate

console.log("c: ", c)
console.log("d: ", d)

//! by reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = 'Hola'; //! Mutate
}

changeGreeting(d)
console.log("c: ", c);
console.log("d: ", d)

//! equals operator sets up new memory space (new address)
//! burada önemli bir nokta var js'de objectler reference ile çalışır, primitive value'larda ise boyle bişi yoktur.
c = {
  greeting: 'howdy'
}

d = {
  
}
console.log("c: ", c);
console.log("d: ", d)