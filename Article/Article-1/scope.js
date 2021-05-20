// 'use strict'

/* // the scope is by default global
var name = 'Hammad';
// Variables inside the Global scope can be accessed and altered in any other scope. */

/* let name = 'Hammad'
console.log(name) // logs 'Hammad'
const logName = () =>  {
  console.log(name) // 'name' is accessible here and everywhere else
}

logName() // logs 'Hammad' */

/* if (true) {
  // this 'if' conditional block doesn't create a new scope
  let name = 'Hammad' // name is still in the global scope
  var name = 'Hammad' // name is still in the global scope
  // var block scope olduğu için ulaşılır ama let oyle değil:
  // let ve const'ta if, switch, for, while gibi kapsayıcılarda farklılık gösterir.
  
}
console.log(name) // logs 'Hammad'
 */

/* if (true) {
  // this 'if' conditional block doesn't create a scope

  // name is in the global scope because of the 'var' keyword
  var name = 'Hammad'
  // likes is in the local scope because of the 'let' keyword
  let likes = 'Coding'
  // skills is in the local scope because of the 'const' keyword
  const skills = 'JavaScript and PHP'
}

console.log(name) // logs 'Hammad'
console.log(likes) // Uncaught ReferenceError: likes is not defined
console.log(skills) // Uncaught ReferenceError: skills is not defined */

//! Global kapsam, uygulamanız devam ettiği sürece geçerlidir. Yerel Kapsam, işlevleriniz çağrılıp yürütüldüğü sürece yaşar.

// logs: Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage…}
/* console.log(this);
console.log("***********")
function logFunction() {
    console.log(this);
}
// logs: Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage…}
// because logFunction() is not a property of an object
logFunction(); */

//! If scope is in the method of an object, context will be the object the method is part of.
/* 
class User {
  logName() {
    console.log("Hiii Guyysss");
    console.log(this)
  }
}

(new User).logName(); // logs User {} */

/* function logFunction() {
  console.log(this)
}

new logFunction() // logs logFunction {}
 */

//! Each function creates its own execution context.

/* function grandfather() {
  let name = 'Hammad'
  // likes is not accessible here
  function parent() {
    // name is accessible here
    console.log(name)
    //! console.log(likes)
    // likes is not accessible here
    function child() {
      // Innermost level of the scope chain
      console.log(name)

      // name is also accessible here
      var likes = 'Coding'
    }
    child()
  }
  parent()
}
grandfather()

//* Bir kapanış, yalnızca dış işlevinde tanımlanan değişkenlere değil, aynı zamanda dış işlevin argümanlarına da erişebilir.
 */

/* function greet() {
  name = 'Hammad';
  return function () {
      console.log('Hi ' + name);
  }
}

greet(); // nothing happens, no errors

// the returned function from greet() gets saved in greetLetter
greetLetter = greet();

// calling greetLetter calls the returned function from the greet() function
greetLetter(); // logs 'Hi Hammad' */

/* function greet() {
  let name = 'Hammad'
  return function () {
    console.log('Hi ' + name)
  }
}

greet()() // logs 'Hi Hammad' */

/* (function () {
  console.log("helllooo")
})(); */

/* var Module = (function () {
  function privateMethod() {
    // do something
    console.log("hellooo")
  }

  return {
    publicMethod() {
      // can call privateMethod();
      console.log("helloo")
    }
  }
})


console.log(Module()) */

/* var Module = (function () {
  function _privateMethod() {
      // do something
  }
  function publicMethod() {
      // do something
  }
  return {
      publicMethod: publicMethod,
  }
})(); */

/* (function(window) {
  // do anything
})(this); */

/* function introduce(name, interest) {
  console.log("Hi! I'm " + name + ' and I like ' + interest + '.')
  console.log('The value of this is ' + this + '.')
  console.log("***********************************")
}

introduce('Hammad', 'Coding') // the way you usually call it
introduce.call(this, 'Batman', 'to save Gotham') // pass the arguments one by one after the contextt
introduce.apply('Hi', ['Bruce Wayne', 'businesses']) // pass the arguments in an array after the context */

// Output:
// Hi! I'm Hammad and I like Coding.
// The value of this is [object Window].
// Hi! I'm Batman and I like to save Gotham.
// The value of this is [object Window].
// Hi! I'm Bruce Wayne and I like businesses.
// The value of this is Hi.

//! Call is slightly faster in performance than Apply.

// Function.prototype.apply()
// Function.prototype.bind() (Introduced in ECMAScript 5 (ES5))
// Function.prototype.call()
// Function.prototype.toString()

// Şimdiye kadar .call (), .apply () ve toString () konularını tartıştık. Call and Apply'dan farklı olarak, Bind kendi başına işlevi çağırmaz, yalnızca işlevi çağırmadan önce bağlamın değerini ve diğer bağımsız değişkenleri bağlamak için kullanılabilir. Yukarıdaki örneklerden birinde Bind kullanarak:

(function introduce(name, interest) {
  console.log("Hi! I'm " + name + ' and I like ' + interest + '.')
  console.log('The value of this is ' + this + '.')
}.bind(this, 'Hammad', 'Cosmology')())


// https://scotch.io/tutorials/understanding-scope-in-javascript#toc-context