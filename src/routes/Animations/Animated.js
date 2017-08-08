import React from 'react';

import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';

// import { Animated, Easing } from 'react-navtive'; - Used for native animations

/* Exercise:
*  Use interpolation to create an animated message that will show up after a
*  button is clicked. For example, maybe a button submits a form, and we can
*  show an animated message confirming the form input was submitted.
*/

// use this.animatedValue.setValue(0) to reset a value

const data = ['Chris', 'Brian', 'Zak'];

export default class AnimatedExample extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      animated: false,
    }
    this.animatedValues = [];
    data.forEach((item) => {
      this.animatedValues[item] = new Animated.Value(0);
    });
  }

  animatedValue = new Animated.Value(0);

  componentDidMount() {
    this.animateNames();
  }

  animateClick = () => {
    Animated.timing(
      this.animatedValue,
      {
        duration: 1000,
        toValue: this.state.animated ? 0 : 1,
        easing: Easing.bounce,
      }
    ).start(() => {
      console.log('animation complete');
    })
    this.setState((state) => ({ animated: !state.animated }));
  }

  animateNames = () => {
    const animations = data.map((item, index) => (
      Animated.timing(
        this.animatedValues[item],
        {
          toValue: 1,
          duration: 500,
          delay: index * 100,
        }
      )
    ));
    Animated.parallel(animations).start();
  }

  render() {
    const animatedMarginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });
    const fontSize = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 32],
    });
    const backgroundColor = this.animatedValue.interpolate({
      inputRange: [0, .15, 1],
      outputRange: ['orange', 'purple', 'black'],
    });
    return (
      <div>
        <p>Animated</p>
        <button onClick={this.animateClick}>Update Margin</button>
        <Animated.div style={Object.assign({}, styles.box, { marginLeft: animatedMarginLeft, backgroundColor })} />
        <Animated.div style={{ fontSize }}>
          Hello World
        </Animated.div>
        {
          data.map((item, index) => (
            <Animated.div style={Object.assign(Object.assign({}, styles.box, { opacity: this.animatedValues[item] }))} key={index}>
              { item }
            </Animated.div>
          ))
        }
      </div>
    )
  }
}

const styles = {
  box: {
    marginTop: 10,
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
}
