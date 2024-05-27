import { useState } from 'react'
import './App.css'
import ReactButton from './components/ReactButton';
import ClickTimes from './components/ClickTimes';
import Login from './components/auth/Login';
// import useStore from '@mf-app/store/index';
import CourseActivities from './components/courses/CourseActivities';



function App() {
  const [count, setCount] = useState(0)
  // const { webSocketSlice } = useStore();
  // const { messages } = webSocketSlice;
  // const { connect, sendMessage } = webSocketSlice.actions;
  // useEffect(() => {
  //   connect();

  //   setTimeout(() => {
  //     console.log('sending message');
  //     sendMessage('Hello from remote app');
  //   }, 1000);
  // }, [connect, sendMessage]);



  const time = Date.now();
  return (
    <>
      <h1>Remote App</h1>
      {/* {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))} */}
      <CourseActivities title="Course Activities" />
      <Login title='Sign in to your Remote App' />
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
