import { useState } from 'react'
function App() {
  let [color, setColor] = useState("black")
  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap bottom-5 justify-center w-full">
        <div className='flex flex-wrap justify-center bg-white'>
          <button className="m-2 p-4 bg-red-500 text-white rounded" onClick={() => setColor("red")}>Red</button>
          <button className='m-2 p-4 bg-green-500 text-white rounded' onClick={() =>
            setColor("green")}>Green</button>
          <button className='m-2 p-4 bg-blue-500 text-white rounded' onClick={() =>
            setColor("blue")}>Blue</button>
          <button className='m-2 p-4 bg-yellow-500 text-white rounded' onClick={() =>
            setColor("yellow")}>yellow</button>
          <button className='m-2 p-4 bg-black text-white rounded' onClick={() =>
            setColor("black")}>black</button>
        </div>

      </div>
    </div>

  )
}

export default App;