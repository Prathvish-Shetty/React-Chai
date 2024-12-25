import { useState } from 'react'
import './App.css'

function App() {
  // useState is responsible for changing state/propogating change throughout the ui or dom
  let [counter,setCounter] =  useState(0)  // default value can be true,false,"","hitesh",[],{} | returns array of 2 size 0-value,1-function
  // let counter = 5  // problem is in ui updation,so hooks were introduced to update data
  const increment = ()=>{
    if(counter < 20){
      counter += 1
      // setCounter(counter)
      // setCounter(counter)
      // setCounter(counter)  // as it renders block of changes at once increment is only by 1
      setCounter((previousCounter)=>(previousCounter+1))
      setCounter(previousCounter=>previousCounter+1)
      setCounter(previousCounter=>previousCounter+1)

      console.log("value incremented",counter);
    }
  }
  const decrement = ()=>{
    // counter -= 1
    if (counter>0) {
      setCounter(counter-1)
      console.log("value decrement",counter);
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={increment}>increment {counter}</button>
      <button onClick={decrement}>decrement {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
