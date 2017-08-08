import React from 'react';
import PropTypes from 'prop-types';

/* Exercise:
*  Create a container component that receives an onClick function as a prop,
*  and passes the function down two levels to a button
*  eg.:
*  <Container onClick={someFunction}>
*    // Child components //
*  </Container>
*/


export default class Context extends React.Component {
  // set childContextTypes in parent
  static childContextTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    func: PropTypes.func,
  }
  // call getChildContext in parent
  getChildContext() {
    return {
      name: 'Brian Behrens',
      age: 34,
      func: this.funTimes,
    }
  }

  funTimes = () => {
    alert('BOOM!');
  }

  logFormData = (formData) => {
    console.log('formData:', formData)
  }

  render() {
    return (
      <div>
        <p style={styles.title}>Context</p>
        <Child1 />
      </div>
    )
  }
}

class Child1 extends React.Component {
  render() {
    return (
      <Child2 />
    )
  }
}

class Child2 extends React.Component {
  static contextTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    func: PropTypes.func,
  }

  render() {
    return (
      <div style={styles.child2}>
        <p>Child2</p>
        <p>Name: {this.context.name}</p>
        <p>Age: {this.context.age}</p>
        <button type="button" onClick={this.context.func}>Blow it up</button>
      </div>
    );
  }
}

const styles = {
  title: {
    fontSize: 34,
    padding: 25,
    margin: 0,
  },
  child2: {
    margin: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#cacaca'
  }
}
