import { useState } from 'react'
import './App.css'
import ReactButton from './components/ReactButton';
import ClickTimes from './components/ClickTimes';
import Login from './components/auth/Login';
// import useStore from '@mf-app/store/index';
import useCourseActivitiesStore from '@mf-app/store/courses/activities/store.course-activities';
// import { Activity } from '@mf-app/store/models/courses.models'; // TODO: known issue with refering types and build
import CourseActivities from './components/courses/CourseActivities';
import CourseActivity from './components/courses/CourseActivity';

interface Label {
  category: string;
  name: string;
}
interface Tag {
  category: string;
  name: string;
}
export interface Activity {
  author: string;
  badge_image: string;
  coming_soon: boolean;
  corner_state: string | null;
  course_bookmark: boolean;
  course_cover_class: string;
  course_policy_text_long: string | null;
  course_policy_text_short: string | null;
  course_url: string;
  difficulty: string;
  duration_total: number;
  header_colour: string | null;
  id: number;
  labels: Label[];
  latest_activity_at: string | null;
  lead_text: string | null;
  level: number;
  mark_total: number;
  name: string;
  not_publicly_accessible: boolean;
  not_publicly_listed: boolean;
  not_visible: boolean;
  points: number;
  recent_slide_url: string;
  type: number;
  description: string;
  band: string[] | null;
  retiring: boolean;
  tags: Tag[];
  sort_popular: number;
  sort_trending: number;
  sort_released: number;
}

function App() {
  const [count, setCount] = useState(0)
  const { data: courseData } = useCourseActivitiesStore();
  const [activity, setActivity] = useState<Activity | undefined>(undefined);
  // const { messages } = webSocketSlice;
  // const { connect, sendMessage } = webSocketSlice.actions;
  // useEffect(() => {
  //   connect();

  //   setTimeout(() => {
  //     console.log('sending message');
  //     sendMessage('Hello from remote app');
  //   }, 1000);
  // }, [connect, sendMessage]);

  const handleCourseSelection = (id: number) => {
    if (courseData) {
      const selectedActivity = courseData.activities.find((activity: Activity) => activity.id === id);
      setActivity(selectedActivity);
    }
  }



  const time = Date.now();
  return (
    <>
      <h1>Remote App</h1>
      {/* {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))} */}
      {activity && (
        <CourseActivity activity={activity} />
      )}
      <CourseActivities title="Course Activities" onSelected={handleCourseSelection}/>
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
