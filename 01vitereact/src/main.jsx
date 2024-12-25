import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement = {
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:"_blank"
//     },
//     childern:"Click me to visit google"
// }

const anotherUser = "chai aur react"

const ReactElement = React.createElement( // babel inject this behind the scene
    'a',
    {href:"https://google.com",target:"_blank"},
    "click me to visit google",
    anotherUser
)

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />
    // MyApp()
    // <ReactElement/> expecting a function
    // anotherElement
    // ReactElement
    <App/>
)
