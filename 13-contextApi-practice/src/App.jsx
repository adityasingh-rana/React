import './App.css'
import Counter from './Counter'
import {CounterContext} from './context/Counter';
import {useContext} from 'react';


function App() {
  const counterState = useContext(CounterContext);

  return (
   <div>
    <h1>count = {counterState.count}</h1>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
   </div>
  );
};

export default App;
