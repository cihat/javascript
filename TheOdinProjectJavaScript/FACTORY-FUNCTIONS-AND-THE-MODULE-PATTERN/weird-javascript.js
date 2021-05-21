//! scope === variable access
//! context === this

/* let a = 1

function foo() {
  a = 2
  if (true) {
    let b = 3
    b = 4
  }
  console.log(b)
}
foo()
console.log(a)
 */

/* var a = 1
console.log(a)

function foo() {
  a = 2
  console.log(a)
}

function bar() {
  console.log("*********************************")
  console.log(a)
  a = 3
  console.log(a)
}

foo()
bar()

console.log(a) */

//! context
/* let a = 1

this.a = a

const foo = () => {
  console.log(a)
}

this.foo = foo
foo()
console.log(this) */

/* var obj = {
  foo() {
    console.log(this === this)
  }
}

console.log({obj}) */

//! Lexical scope does not work backwards.
/* var name = 'Todd'
var scope1 = function () {
  // name is available here
  console.log('scope1', name)
  return (scope2 = function () {
    // name is available here too
    console.log('scope2', name)
    return (scope3 = function () {
      // name is also available here!
      console.log('scope3', name)
    })
  })
}

scope1()()() */

//! Closures

/* var sayHello = function (name) {
  let text = 'Hello, ' + name;
  console.log(text)
  return function () {
    console.log(text);
  };
};

sayHello("Cihat")() */

/* var width = 100
console.log(width) // 100
width = 200
console.log(width) // 200 */

/* function setWidth() {
  var width = 100
  console.log(width)
}
setWidth()
console.log(width) // error, width is not defined
 */

/* var width
function setWidth() {
  var width = 100
  console.log(width)
}
setWidth()
console.log(width) */

//! Factory Functions

const Player = (name, level) => {
  let health = level * 2
  const getLevel = () => level
  const getName = () => name
  const die = () => {
    // uh oh
  }
  const damage = (x) => {
    health -= x
    if (health <= 0) {
      die()
    }
  }

  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1)
      console.log(`${enemy.getName()} has damaged ${name}`)
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1)
      console.log(`${name} has damaged ${enemy.getName()}`)
    }
  }

  return { attack, damage, getLevel, getName }
}

const jimmie = Player('jim', 10)
const badGuy = Player('jeff', 5)

jimmie.attack(badGuy)

// https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/factory-functions-and-the-module-pattern#back-to-factory-functions
