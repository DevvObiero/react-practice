
import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count,setCount] =  useState(5)


  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1 )
  }


  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Use State Practice</h1>
   
      <button onClick={decrement}  >-</button>
      <span>{count}</span>
      <button onClick={increment}   >+</button>
    </div>
  )
}

export default App
