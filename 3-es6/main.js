/* var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

console.log(getFood(false)); // undefined   */

/* let snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        let snack = 'Friskies';
        return snack;
    }
    return snack;
}

console.log(getFood(false)); // 'Meow Mix' */

/* (function () {
  var food = 'Meow Mix';
  console.log(food)
}());

console.log(food); // Reference Error */

/* function Person(name) {
  this.name = name;
}

Person.prototype.prefixName = function (arr) {
  return arr.map(function (character) {
    console.log(character)
      return this.name + character; // Cannot read property 'name' of undefined
  });
}; */

/* function Person(name) {
  this.name = name;
}

Person.prototype.prefixName = function (arr) {
  return arr.map(function (character) {
    console.log(this);
    return this.name + character;
  }, this);
};

let person = new Person();
person.prefixName([
  { name: "sadşfkljsf" },
  { name: "sadşfkljsf" },
  { name: "sadşfkljsf" },
  { name: "sadşfkljsf" },
]); 

function Person(name) {
  this.name = name;
}
*/
/* 
Person.prototype.prefixName = function (arr) {
  console.log(arr.map((character) => this.name + character));
  return arr.map((character) => this.name + character);
};

let person = new Person();
person.prefixName([1, 2, 3]);
 */
/* 
var string = 'food';
var substring = 'foo';

console.log(string.indexOf(substring) != -1); */

/* const string = 'food';
const substring = 'foo';

console.log(string.includes(substring)); // true */
/* 
function repeat(string, count) {
  var strings = [];
  while(strings.length < count) {
      strings.push(string);
  }
  return strings.join('');
}
console.log(repeat("meow", 5)) */

// String.repeat(numberOfRepetitions)
// console.log('meow'.repeat(3)); // 'meowmeowmeow'

/* let [a, b, c, d] = ["Cihat", "Ali", "Hasan", "Veli"];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 2
console.log(d); // 2 */

/* var luke = { occupation: 'jedi', father: 'anakin' };
var occupation = luke.occupation; // 'jedi'
var father = luke.father; // 'anakin'
// console.log(father) */
/* 
let luke = { occupation: 'Ali Veli Kırk Dokuz Elli', father: 'anakin' };
let {occupation, father} = luke;

console.log(occupation); // 'jedi'
console.log(father); // 'anakin' */

// export let name = 'David';
// export let age = 25;

/* function logArguments(...args) {
  for (let arg of args) {
      console.log(arg);
  }
}

logArguments(["sdfşlkjdsaf", "sdşlkfjf", "şslkjfsf", 34, 4545, 4545, { asşfkl: "asdşkfljsdf  " }])

 */

/* function initializeCanvas(options) {
  var height = options.height || 600;
  var width  = options.width  || 400;
  var lineStroke = options.lineStroke || 'black';
  console.log(height, width, lineStroke)
}

initializeCanvas({ height: "400", width: "300", lineStroke: "bold" })
 */

// console.log(Math.max.apply(null, [-1, 100, 9001, -32]))
// console.log(Math.max(...[-1, 100, 9001, -32]))

/* let cities = ['San Francisco', 'Los Angeles'];
let places = ['Miami', ...cities, 'Chicago'];
console.log(places)
 */
