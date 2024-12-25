import Chai from "./chai"
function App() {
  const username = "chai aur code"
  return (
    <>
    <h1>chai aur react with vite by {username}</h1>
    {/* {username} is evaluated expression-not js but its final outcome */}
    <Chai/>
    <p>test para</p>
    </>
  )
}

export default App
