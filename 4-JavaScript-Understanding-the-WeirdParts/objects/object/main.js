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
/* let a = 123;
let b;
b = a;
b = 1;
console.log("b değeri: ", b)
console.log("a değeri: ", a) */

//! by reference (all objects (including functions))
/* var c = {
  greeting: 'Hi..',
}
var d;

d = c;
d.greeting = 'Merhaba' //! mutate

console.log("c: ", c)
console.log("d: ", d) */

//! by reference (even as parameters)
/* function changeGreeting(obj) {
  obj.greeting = 'Hola'; //! Mutate
}

changeGreeting(d)
console.log("c: ", c);
console.log("d: ", d) */

//! equals operator sets up new memory space (new address)
//! burada önemli bir nokta var js'de objectler reference ile çalışır, primitive value'larda ise boyle bişi yoktur.
/* c = {
  greeting: 'howdy'
}

d = {
  
}
console.log("c: ", c);
console.log("d: ", d) */

/* function a() {
  console.log(this);
  this.newVariable = "Hello";
}

var b = function () {
  console.log(this);
};

a();
console.log(newVariable);
b(); */
/* 
var c = {
  name: "The C object",
  log: function () {
    this.name = 'Updated C object';
    // console.log(this);
    var self = this;

    var setname = function (newname) {
      self.name = newname;
    }
    setname('Updated again! The c object')
    console.log(self)
  },
  show() {
    console.log(this);
  },
};

c.log();
c.show()
 */

/* var arr = [
  1,
  false,
  { name: "Tony", address: "111 Main St." },
  function (name) {
    var greeting = "Hello ";
    console.log(greeting + name);
  },
  "Hello",
];

console.log(arr)
arr[3](arr[2].name  ) */

/* function greet(firstname, lastname, language, ...other) {
  language = language || 'en'

  if (arguments.length === 0) {
    console.log('Missing Parameters!')
    console.log("---------------")
    return;
  }

  console.log(firstname)
  console.log(lastname)
  console.log(language)
  console.log('arg 0: ' + arguments[0])
  console.log('Other', other)
  console.log("------------------")
}

greet();
greet('John')
greet('John', 'Doe')
greet('John', 'Doe', 'tr')
greet('John', 'Doe', 'tr', "111 Barbaros", 'sadşkljsd', "sdşlkfjav", "şlkadjds") */

//! IIEF(Immediately Invoked Function Expression)
/* var greeting = (name => {
  return 'Hello ' + name;
})("John Doe")

console.log(greeting)

3;
"Helllo I am a string";

{
  name: 'John'
}
var firstname = 'John'
(function (name) {
  console.log('Inside IIFE: Hello ' + name)
})(firstname)//! IIFE */

//! IIFE
/* (function (global, name) {
  var greeting = 'Hello'
  global.greeting = 'Hello'
  console.log(greeting + ' ' + name)
})(window, 'John')//! IIFE

console.log(greeting) */

function greet(whattosay) {
  return function (name) {
    console.log(whattosay + ' ' + name)
  }
}

greet('Hi')("Tony")