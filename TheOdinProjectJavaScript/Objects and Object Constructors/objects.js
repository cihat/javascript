//! There are multiple ways to define objects but in most cases, it is best to use the object literal syntax as follows:

/* const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function () {
    // do stuff!
    return "hello"
  },
};

console.log(myObject.property);
console.log(myObject["obnoxious property"]());
//! hatalı
//! console.log(myObject."obnoxious property");
const variable = 'obnoxious property'
console.log(myObject[variable]()) // this is equivalent to myObject['property'] and returns 'Value!' */

// Object.create()
/* const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Cihat'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true" */

/* function Student() {}

Student.prototype.sayName = function () {
  console.log(this.name);
};

function EighthGrader(name) {
  this.name = name;
  this.grade = 8;
}

EighthGrader.prototype = Object.create(Student.prototype);

const carl = new EighthGrader("carl");
carl.sayName(); // console.logs "carl"
carl.grade; // 8 */

/* function Student() {}

Student.prototype.sayName = function () {
  console.log(this.name);
};

function EighthGrader(name) {
  this.name = name;
  this.grade = 8;
}

// don't do this!!!
EighthGrader.prototype = Student.prototype;

function NinthGrader(name) {
  this.name = name;
  this.grade = 9;
}

// noooo! not again!
NinthGrader.prototype = Student.prototype;

// If we had used Object.create in this example then we could safely edit the NinthGrader.prototype.sayName function without changing the function for EighthGrader as well.



NinthGrader.prototype.sayName = function () {
  console.log("HAHAHAHAHAHA");
};

const carl = new EighthGrader("carl");
carl.sayName(); //uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function! */

//! 🎉👨‍👩‍👧‍👧 JavaScript Visualized: Prototypal Inheritance
/* function Dog(name, breed, color) {
  this.name = name
  this.breed = breed
  this.color = color
}

Dog.prototype.bark = function () {
  return 'Hawww'
}

const kopek1 = new Dog("karabas", "kangal", "boz")
console.log(kopek1)
console.log(Dog) */

/* Örnekte bir özelliğe erişmeye çalıştığımızda, motor öncelikle özelliğin nesnenin kendisinde tanımlanıp tanımlanmadığını görmek için yerel olarak arama yapar. Ancak, erişmeye çalıştığımız özelliği bulamazsa, motor __proto__ özelliği aracılığıyla prototip zincirinde aşağı doğru ilerler! */

function Dog(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
}
Dog.prototype.bark = function () {
  return "Howww!";
};

class Dog {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }

  bark() {
    return "Howww!";
  }
}

// Classes
/* class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return "Howww!"
  }
}

class Cangal extends Dog {
  constructor(name) {
    super(name)
  }

  bigBark() {
    return 'Bigg Howww!'
  }
} */

const myPet = new Cangal("Karabas!");
console.log(myPet.bigBark());
