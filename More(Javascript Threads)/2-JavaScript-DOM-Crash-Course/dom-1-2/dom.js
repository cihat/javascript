// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.title)
// console.log(document.domain)
// console.log(document.URL)
// document.title = "cihatdev"
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// document.all[10].textContent = "Cihat Salik"
// console.log(document.all[10])
// console.log(document.links)
// console.log(document.images)
/* 
//! GETELEMENTBYID

console.log(document.getElementById('header-title'))
let headerTitle = document.getElementById('header-title')
// // headerTitle.textContent = "Cihat Salik"
console.log(headerTitle.textContent)//arasındaki farklar textContent'e html'de görünmeyen bütün child elememanları getirir. Ama innerText sadece text halinde olanları dödürür.
console.log(headerTitle.innerText)
headerTitle.innerHTML = "<h2>Hi Guysss!!!!</h2>"
headerTitle.style.borderBottom = "3px solid #000" */

/*
//! GETELEMENTBYCLASSNAME
let items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "Cihat";
items[1].style.fontWeight = "800";
items[1].style.backgroundColor = "#fff445";
// items.forEach((item) => (item.style.backgroundColor = "#fff445"));
for (let i = 0; i <= items.length; i++) {
  items[i].style.backgroundColor = "#f3f3f3";
}
for (const item of items) {
  items[i].style.backgroundColor = "#000";
  item.style.backgroundColor = "#000";
}

for (let i = 0; i <= items; i++) {
  items[i].style.backgroundColor = "#000"
}
 */

/* 
//! GETELEMENTBYTAGNAME
let li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "Cihat";
li[1].style.fontWeight = "800";
li[1].style.backgroundColor = "#fff445";
// li.forEach((item) => (item.style.backgroundColor = "#fff445"));
for (let i = 0; i <= li.length; i++) {
  li[i].style.backgroundColor = "#f3f3f3";
} */
/* 
//! QUERYSELECTOR
let header = document.querySelector("#main-header")
header.style.borderBottom = "solid 4px #ccc"

let input = document.querySelector("input")
input.value = 'Hello Word'

let submit = document.querySelector("input[type='submit']")
submit.value = 'SEND'

let item = document.querySelector(".list-group-item")
item.style.color = "red"

let lastItem = document.querySelector(".list-group-item:last-child")
lastItem.style.color = "green";

let items = document.querySelectorAll(".list-group-item:nth-child(n)")
let oddItems = document.querySelectorAll(".list-group-item:nth-child(odd)")
console.log(items)

items.forEach(item => {
  item.style.color = "red"
  item.textContent = "Agagagagag Noluyooo Agaga"
});
oddItems.forEach(item => {
  item.style.backgroundColor = "#f4f4f4"
}); */

// let itemList = document.querySelector("#items");
//! parentNode
/* console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
// itemList.parentNode.style.display = "none";
console.log(itemList.parentNode.parentNode.parentNode) */

//! parentElement
/* console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";
// itemList.parentElement.style.display = "none";
console.log(itemList.parentElement.parentElement.parentElement) */

//! childNodes
/* 
console.log(itemList.childNodes) */

//! children
/* console.log(itemList.children)
itemList.children[1].style.backgroundColor = "blue" */

/* //! firstChild
console.log(itemList.firstChild)

//! firstElementChild
console.log(itemList.firstElementChild)
itemList.firstElementChild.style.backgroundColor = "pink" */

//! lastChild
console.log(itemList.lastChild);

//! lastElementChild
/* console.log(itemList.lastElementChild)
itemList.lastElementChild.style.backgroundColor = "pink"
 */

//! nextSibling
/* console.log(itemList.nextSibling)
console.log(itemList.nextElementSibling)
 */
//! previousSibling
/* console.log(itemList.previousSibling)
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = "green" */

//! createElement
// let newDiv = document.createElement("div");

//! add class --> className
// newDiv.className = "hello";

//! add id --> idName
// newDiv.id = "hello";

//! add attribute
// newDiv.setAttribute("title", "Hello Div");

//! create text node
// let newDivText = document.createTextNode('Hello World!')

//! Add text to div
// newDiv.appendChild(newDivText);
// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')

//! insertBefore (1., 2.) 2.'den önce gelmesi içindir.
// container.appendChild(newDiv)
// container.insertBefore(newDiv, h1)

// newDiv.style.fontSize = '60px'

// console.log(newDiv)

/* 
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }



// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1); */
