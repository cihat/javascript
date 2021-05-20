## 15 JavaScript concepts that every JavaScript Programmer must know.

Most of the information in this file is cited from [this article](https://madasamy.medium.com/15-javascript-concepts-that-every-nodejs-programmer-must-to-know-6894f5157cb7).

1. JS Prototype

```javascript
function Bike(model, color) {
  ;(this.model = model),
    (this.color = color),
    (this.getDetails = function () {
      return this.model + ' bike is ' + this.color
    })
}
var bikeObj1 = new Bike('BMW', 'BLACK')
var bikeObj2 = new Bike('BMW', 'WHITE')
console.log(bikeObj1.getDetails()) //output: BMW bike is BLACK
console.log(bikeObj2.getDetails()) //output: BMW bike is WHITE
```

2. JavaScript(ES6) Class

```javascript
class Bike {
  constructor(color, model) {
    this.color = color
    this.model = model
  }
}
```

3. IIFE

```javascript
(function ()
{// logic here })
();
```

4. understanding Scope:

5. JavaScript Closures

6. The Module Pattern

7. Hoisting

8. Currying

9. Memoization

10. The apply, call, and bind methods

11. Polymorphism in JavaScript