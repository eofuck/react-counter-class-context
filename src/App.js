import React from 'react';
import Counter from './Counter';

function App() {
  //it get consoled only once when page loads and not everytime <Counter/> rerenders
  //because when state changes it only renders component you are inside of 
  //and any child components that are rendered from that component
  console.log('Render App');
  //passed down initialCount as 0 down to <Counter/> as props
  //you access it by using this.props.initialCount
  return <Counter initialCount={1} />;
}

export default App;
