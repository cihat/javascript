/* const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!')
  const sayHello2 = () => console.log('Naber laaa!')
  return { name, age, sayHello, sayHello2 }
}

const jeff = personFactory('jeff', 27)

console.log(jeff.name) // 'jeff'

jeff.sayHello() // calls the function and logs 'hello!'
jeff.sayHello2() // calls the function and logs 'Naber laaa!'
 */

//! Yukarıdaki kod ile altdaki kod farklı görünebilir ama aynı işi yapar.

/* const Person = function (name, age) {
  this.sayHello = () => console.log('hello!')
  this.name = name
  this.age = age
}

const jeff = new Person('jeff', 27)

jeff.sayHello()
 */

//! ES6 ile gelen bir özellik. Object'lerde isimler aynıysa ":" işaretin karşısına yazmaya gerek yoktur.
/* const name = 'Maynard'
const color = 'red'
const number = 34
const food = 'rice'

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(name, color, number, food) // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({ name, color, number, food })
// { name: 'Maynard', color: 'red', number: 34, food: 'rice' } */


//! Scope and Closure

//* Closure'ı anlamak için önce scope'u iyi anlamak gerekir.
//* Scope , kodunuzda değişkenler ve işlevler gibi şeylerin nerede kullanılabileceğini ifade eden terimdir.

let a = 17

const func = (x) => {
  let a = x
}

func(99)

console.log(a) // ???????