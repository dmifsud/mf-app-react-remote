// import { useState } from 'react'
import { Component } from 'solid-js';
import counterState  from '@mf-app/store/counter/store.counter';
import profileState from '@mf-app/store/auth/store.profile';
import './App.css'
import './web-components/lit-button';
import LoginForm from './components/auth/Login';
import CourseActivities from './components/courses/CourseActivities';
// import ReactButton from './components/ReactButton';
// import ClickTimes from './components/ClickTimes';
// import Login from './components/auth/Login';
// import useStore from '@mf-app/store/index';
// import useCourseActivitiesStore from '@mf-app/store/courses/activities/store.course-activities';
// import CourseActivities from './components/courses/CourseActivities';
// import CourseActivity from './components/courses/CourseActivity';

// import { createSignal } from "solid-js";


const App: Component = () => {
	// const [count] = createSignal(+counterState.count);

	// setInterval(() => setCount((prev) => prev + 1), 1000);
	

	return (
		<div>
			<p>Count: {counterState.count}</p>
			<lit-button type="button" text={`Increment: ${counterState.count}`} onClick={() => counterState.inc()}></lit-button>
			{/* <button class="disabled:opacity-15 bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => {
				counterState.inc();
			}}>Increment</button> */}
			<CourseActivities title='Courses'/>
			<LoginForm title="Sign in to your account" />
			{profileState.name && <p>Welcome {profileState.name}</p>}
		</div>
	);
}

// function App() {
//   // const [count, setCount] = useState(0)
//   // const { data: courseData } = useCourseActivitiesStore();
//   // const [activity, setActivity] = useState<Activity | undefined>(undefined);
//   // const { messages } = webSocketSlice;
//   // const { connect, sendMessage } = webSocketSlice.actions;
//   // useEffect(() => {
//   //   connect();

//   //   setTimeout(() => {
//   //     console.log('sending message');
//   //     sendMessage('Hello from remote app');
//   //   }, 1000);
//   // }, [connect, sendMessage]);

//   // const handleCourseSelection = (id: number) => {
//   //   if (courseData) {
//   //     const selectedActivity = courseData.activities.find(activity => activity.id === id);
//   //     setActivity(selectedActivity);
//   //   }
//   // }



//   const time = Date.now();
//   return (
//     <>
//       <h1>Remote App</h1>
//       {/* {messages.map((message, index) => (
//         <div key={index}>{message}</div>
//       ))} */}
//       {activity && (
//         <CourseActivity activity={activity} />
//       )}
//       <CourseActivities title="Course Activities" onSelected={handleCourseSelection}/>
//       <Login title='Sign in to your Remote App' />
//       <p>
//         Using shared Zustand store with host app
//       </p>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           Local state count is {count}
//         </button>
//         <ReactButton text="Remote app button click:"/>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <div>
//         <div><ClickTimes /></div>
//         <small>Local state count: {count}</small>
//       </div>
//       <h1 className="text-3xl font-bold underline">
//       Hello world! {time}
//     </h1>
//     </>
//   )
// }

export default App
