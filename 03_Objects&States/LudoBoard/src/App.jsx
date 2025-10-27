import { useState } from 'react'
import './App.css'

function App() {
  let [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0
  });

  let handleBlue = () => {
    setMoves((prevMoves) => {
      return {...prevMoves, blue: prevMoves.blue + 1};
    });
  }

  let handleRed = () => {
    setMoves((prevMoves) => {
      return {...prevMoves, red: prevMoves.red + 1};
    });
  }

  let handleYellow = () => {
    setMoves((prevMoves) => {
      return {...prevMoves, yellow: prevMoves.yellow + 1};
    });
  }

  let handleGreen = () => {
    setMoves((prevMoves) => {
      return {...prevMoves, green: prevMoves.green + 1};
    });
  }

  return (
    <>
      <p>Blue : {moves.blue}</p>
      <button onClick={handleBlue} style={{backgroundColor: "blue"}}>+1</button>
      <p>Red : {moves.red}</p>
      <button onClick={handleRed} style={{backgroundColor: "red"}}>+1</button>
      <p>Yellow : {moves.yellow}</p>
      <button onClick={handleYellow} style={{backgroundColor: "yellow", color: "black"}}>+1</button>
      <p>Green : {moves.green}</p>
      <button onClick={handleGreen} style={{backgroundColor: "green"}}>+1</button>
    </>
  )
}

export default App
