import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
// app rerenders when any value changes
// component remounts when state changes
function App() {
  const [value, setValue] = useState(1)
  const [multipliedValue, setMultipliedValue] = useState(1)
  const multiplyByFive = () => {
    setMultipliedValue(value*5)
    setValue(value+1)
  }
  return (
    <>
      <h1>Main value: {value}</h1>
      <button onClick={multiplyByFive}>click to multiply by 5</button>
      <h2>Multiplied value: </h2>
    </>
  )
}
  */

/*
// the below one is also correct
function App() {
  const [value, setValue] = useState(1)
  let multipliedValue = vaue*5
  const multiplyByFive = () => {
    setValue(value+1)
  }
  return (
    <>
      <h1>Main value: {value}</h1>
      <button onClick={multiplyByFive}>click to multiply by 5</button>
      <h2>Multiplied value: </h2>
    </>
  )
}
  */

function App() {
  console.log("App rendered", Math.random());
  // const [value, setValue] = useState(1)
  const [value, setValue] = useState({value: 0})
  useEffect(() => {}, [value.value])
  
  const clickme = () => {
    // console.log("logged")
    // setValue(1) dont rerender
    // setValue(5) rerender once
    // setValue({value: 0}) always rerender non primitive datatype
  }
  return (
    <>
      {/* <h1>Main value: {value}</h1> */}
      <h1>Main value: {value.value}</h1>
      <button onClick={clickme}>click me</button>
    </>
  )
}

export default App
