/* eslint-disable no-unused-vars */
// /*eslint no-unused-vars: "error"*/
/*global some_unused_var*/
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg m-4">
        <h1 className="text-3xl font-bold text-white mb-4">Counting the variable</h1>
        <p className="text-xl text-gray-300 mb-4">Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Increment
        </button>
        <button className = "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300" onClick={() => setCount(0)}>reset</button>
      </div>  
    </>
  )
}

export default App
