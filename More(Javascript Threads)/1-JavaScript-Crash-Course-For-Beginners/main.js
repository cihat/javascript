//! Object Literal
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["music", "movies"],
//   address: {
//     street: '50 main st',
//     city: 'Boston',
//     state: 'MA'
//   }
// };

// person.address.city = "Ankara"
// person.address.apartmant = 15;

// const { firstName, lastName, address: { city, apartmant } } = person;

// console.log(city)
// console.log(apartmant)


const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
  },
  {
    id: 4,
    text: 'Take out trash',
    isCompleted: false
  },
]
/* const todoJSON = JSON.stringify(todos)
console.log(todoJSON) */

/* forof
for (let todo of todos) {
  console.log(todo.text)
} */

//* forEach, map(new array), filter(new array)
/* todos.forEach(todo => {
  console.log(todo.text)
});*/

//! map yeni bir dizi oluşturur
/* let todoText = todos.map(todo => todo.text)
console.log(todoText) */

//! filter object 
/* const todoCompletedText = todos.filter(todo => todo.isCompleted === true).map(todo => todo.text)
console.log(` Completed ${todoCompletedText !== 1 ? 'Todos: ' : 'Todo: '} ${todoCompletedText}`); */


//! OOP
/* // Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}
// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}
// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
} */

//! ES6 CLASSES
/* class Person{
  constructor(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

Person.prototype.getAge = () => {
  // console.log("helolloo")
  return "Hellllllllooo"
} 
//! Instantiate objext
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('John', 'Doe', '14-6-2000')

console.log(person1.getAge())
console.log(person1)
*/

//! DOM
//! ELEMENT SELECTORS


 // Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


/* // MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red'; */


/* // EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
}); */

/* // Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
}); */


// USER FORM SCRIPT

/* // Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users'); */

// Listen for form submit
/* myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
} */