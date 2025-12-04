import Lottery from './Lottery.jsx';
import './App.css'
import { sum } from './helper.js';

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <>
      <Lottery n = {3} winCondition= {winCondition}/>
    </>
  )
}

export default App
