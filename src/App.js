import './App.css';
import Parents from './components/Parents';
import { createContext, useState } from 'react';
export const COUNTER_CONTEXT = createContext();

function App() {
  const [count,setCount]= useState(0);
  const value = {count, setCount}
  return (
    <COUNTER_CONTEXT.Provider value ={value}>
    <div className="App">
      <Parents></Parents>
    </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
