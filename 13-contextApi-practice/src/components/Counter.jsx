import {CounterContext} from '../context/Counter';
import {useContext} from 'react';

function Counter() {
  const counterState = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => counterState.setCount(counterState.count + 1)}>increment</button>
      <button onClick={() => counterState.setCount(counterState.count - 1)}>dicrement</button>
    </div>
  );
};

export default Counter;
