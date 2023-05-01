// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'

function App() {

// Copy your API key to your clipboard.
// Paste your API key below, replacing the empty string with your actual key:

let ApiKey = "paste-your-api-key-here";
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <News country={"in"} api={ApiKey} pageSize={20}/>

    </>
  )
}

export default App