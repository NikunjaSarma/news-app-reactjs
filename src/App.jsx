// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <News country={"in"} api={"7ba0628464154bfea63bc7094bf9429c"} pageSize={20}/>

    </>
  )
}

export default App
