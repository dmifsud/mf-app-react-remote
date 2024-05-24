import { useState } from 'react'
import './App.css'
import ReactButton from './components/ReactButton';
import ClickTimes from './components/ClickTimes';
import Login from './components/auth/Login';




function App() {
  const [count, setCount] = useState(0)
  const time = Date.now();
  return (
    <>
      <h1>Remote App</h1>
      <Login />
      <p>
        Using shared Zustand store with host app
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Local state count is {count}
        </button>
        <ReactButton text="Remote app button click:"/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <div><ClickTimes /></div>
        <small>Local state count: {count}</small>
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world! {time}
    </h1>
    </>
  )
}

export default App
