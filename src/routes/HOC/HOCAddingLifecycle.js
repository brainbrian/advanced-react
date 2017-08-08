import React from 'react';

const MainComponent = () =>
  <p>HOC Adding Lifecycle</p>

const AddingLifecycle = (Component, node, type, func) => {
  return class extends React.Component {
    componentDidMount() {
      node.addEventListener(type, () => func(window.innerWidth));
    }
    render() {
      return (
        <Component {...this.state} />
      )
    }
  }
}

export default AddingLifecycle(MainComponent, window, 'resize', (width) => console.log(`width: ${width}`));
