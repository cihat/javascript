/* function b() {
  console.log("hellllllloooo")
}

var a;

b();
console.log(a)

a = "Hello Guyss" */

/* var a;
console.log(typeof a)

a === undefined ? console.log('a is undefined') : console.log('a is defined!'); */

/* function b() {
  console.log("hellllllloooo")
}

b();

var a = "Hello Guyss";

console.log(a) */

/* a();
var d;

function a() {
  console.log("helloo1");
  b();
  var c;
  console.log("helloo4")
  console.log("helloo5")
  console.log("helloo6")
}

function b() {
  var d;
  c();
  console.log("helloo3");
}

function c() {
  var d;
  console.log("helloo2");
} */


/* function b() {
  var myVar;
  console.log(myVar)
}

function a() {
  var myVar = 2;
  console.log(myVar)
  b();
}

var myVar = 1;
console.log(myVar)
a()
console.log(myVar) */


//! Scope Chain
//* Evebeyn çocuk ilişkisi var. Scope'un içindeki function'lardan ne geliyorsa çocuklara geçer.
//! Yani js'de bulunduğun scode ve içindeki variable'ların yeri öndemli olmaksızın sadece scope içinde olması ile işlemler yapılır. Tabi bulunulan scope'un ebeveny'ninde inherite edilebilir bi şartla aynı variable değilse yoksa scope'daki value baz alınır.
/* function b() {
  console.log("undefined because have in new scope so overrided " + myVar)
  var myVar = 3;
  function d() {
    console.log(myVar)
  }
  d()
}

function a() {
  var myVar = 2;
  function c() {
    console.log(myVar)
  }
  c()
  b();
}
const myVar = 1;
a() */

/* let z = 12, y = 14, x = 234;

if (y > z) {
  let x = 10;
}
console.log(x) */

//** VAR - LET DİFFERENTS */
// Scoping rules
/* function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo"
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}

run(); */

// Hoisting
/* function run() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}

function checkHoisting() {
  console.log(foo); // ReferenceError
  let foo = "Foo";
  console.log(foo); // Foo
}

checkHoisting();
run(); */

/* var foo = "Foo";  // globally scoped
let bar = "Bar"; // not allowed to be globally scoped

//! Creating global object property
console.log(window.foo); // Foo
console.log(window.bar); // undefined */

/* // Redeclaration
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

let bar = "bar1"; 
let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared */

//!kodunuzda bir değişkenin bulunduğu yer. Ve gerçekten aynı değişkense veya yeni bir kopya ise.

// long running function
/* function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date < ms) {}
    console.log('Finished function!')
}

  function clickHandler() {
    console.log('click event!');
  }

  // listen for the click event
  document.addEventListener('click', clickHandler);

  waitThreeSeconds();
  console.log('Finished execution'); */

  
//! You don't tell the js engine what type of data a variable holds, it figures it out while your code is running
//! js motoruna bir değişkenin ne tür veriler tuttuğunu söylemezsiniz, kodunuz çalışırken anlar
// tek bir değeri temsil eden bir veri türü -> primitive type

// Null ve undefined
/* null is an assigned value. It means nothing.
undefined means a variable has been declared but not defined yet.
null is an object. undefined is of type undefined.
null !== undefined but null == undefined. */


/* var a = 3 + 4 * 5;
console.log(a)

null == 0 //! false
null < 1 //! true
"" == 0 //! true
"" == false //! true 
*/

// default value 
function greet(name = "Person") {
  console.log('Hello ', name)
}

greet();