//! 4.7
// good
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
});

//! Destructuring
// iyi
/* function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}
console.log(getFullName({firstName: "John", lastName: "doe"})) */

// çok iyi
/* function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
} */

/* // kötü
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// normal
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// iyi
import { es6 } from './AirbnbStyleGuide';
export default es6; */