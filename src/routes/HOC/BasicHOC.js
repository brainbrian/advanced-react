/*
const getInfo = (age) => (name) => (location) => {
  console.log(`Hello ${name}! You are ${age} years old. They live in ${location}`);
}

const person = getInfo(36);

person('Chris')('Federal Way')
person('Zak')('Des Moins')
person('Brian')('West Seattle')
*/

import React from 'react'

const Greeting = () =>
  <p>Hello World!</p>

// 2 ways to create an Higher Order Component

const greetingWithFunc = (func) => (Component) => (props) => {
  func();
  return <Component {...props} />;
}

// const greetingWithFunc = (func) => (Component) => {
//   return new class extends React.Component {
//     render() {
//       func();
//       return <Component {...this.props} />;
//     }
//   }
// }

const log = () => console.log('hello from higher order component');

const BasicHOC = greetingWithFunc(log)(Greeting)

export default BasicHOC;
