import React, { useState } from 'react';
import Counter from './Counter';

//Context has provider and consumer
//Provider passes value and consumer consumes it
//also when context get's changed it doesn't rerender app
//yo need to use state for it
export const ThemeContext = React.createContext();

function App() {
  //it gets consoled only once when page loads and not everytime <Counter/> rerenders
  //because when state changes it only renders component you are inside of
  //and any child components that are rendered from that component
  console.log('Render App');

  const [theme, setTheme] = useState('red');

  return (
    //all of the code inside <ThemeContext.Provider/> can access it
    //this attribute always needs to be caled value
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      {/* passed down initialCount as 0 down to <Counter/> as props,
      you access it by using this.props.initialCount*/}
      <Counter initialCount={1} />
      <button
        onClick={() =>
          setTheme((PrevTheme) => {
            return PrevTheme === 'red' ? 'blue' : 'red';
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
