import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [vote, lion] = useState(0)
  const [vote2, dog] = useState(0)
  const [vote3, cat] = useState(0)
  const [vote4, wolf] = useState(0)
  const MyButton =()=>{
    return(<><button onClick={Greet}>Click Me</button></>);
  }
  function PollOption(){
    handleVote(index);
  }
  const Greet=()=>{alert('Hi')}
  return (

    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => lion((vote) => vote + 1)}>
          Lion vote is {vote}
        </button>
        <button onClick={() => dog((vote2) => vote2 + 1)}>
          Dog vote is {vote2}
        </button>
        <button onClick={() => cat((vote3) => vote3 + 1)}>
          Cat vote is {vote3}
        </button>
        <button onClick={() => wolf((vote4) => vote4 + 1)}>
          Wolf vote is {vote4}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
