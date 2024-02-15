import React from 'react';

const WithLogging = (WrappedComponent) => {
  const name = WrappedComponent.name || WrappedComponent.displayName || 'Component';

  class HOC extends React.Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }
  
    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }

  HOC.displayName = `WithLogging(${name})`;
  return HOC;
}

export default WithLogging;
