import { importShared } from './__federation_fn_import-DTmPC8t8.js';
import { _ as __federation_method_getRemote, a as __federation_method_unwrapDefault } from './_virtual___federation__-DBEDY3nC.js';
import { j as jsxRuntimeExports } from './jsx-runtime-BgsmXpcd.js';
import ReactButton from './__federation_expose_ComponentsReactButton-L6DmDyzs.js';
import ClickTimes from './__federation_expose_ComponentsClickTimes-5w5q9RSc.js';
import Login from './__federation_expose_ComponentsAuthLogin-1kGwc1ys.js';
import CourseActivities from './__federation_expose_ComponentsCoursesCourseActivities-PPQNmt-v.js';
import CourseActivity from './__federation_expose_ComponentsCoursesCourseActivity-CSCih9Ss.js';

const {useState} = await importShared('react');
const __federation_var_mfappstorecoursesactivitiesstorecourseactivities = await __federation_method_getRemote("@mf-app/store" , "./courses/activities/store.course-activities");
 let useCourseActivitiesStore = __federation_method_unwrapDefault(__federation_var_mfappstorecoursesactivitiesstorecourseactivities); 
function App() {
  const [count, setCount] = useState(0);
  const { data: courseData } = useCourseActivitiesStore();
  const [activity, setActivity] = useState(void 0);
  const handleCourseSelection = (id) => {
    if (courseData) {
      const selectedActivity = courseData.activities.find((activity2) => activity2.id === id);
      setActivity(selectedActivity);
    }
  };
  const time = Date.now();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Remote App" }),
    activity && /* @__PURE__ */ jsxRuntimeExports.jsx(CourseActivity, { activity }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CourseActivities, { title: "Course Activities", onSelected: handleCourseSelection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Login, { title: "Sign in to your Remote App" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Using shared Zustand store with host app" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCount((count2) => count2 + 1), children: [
        "Local state count is ",
        count
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReactButton, { text: "Remote app button click:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClickTimes, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { children: [
        "Local state count: ",
        count
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold underline", children: [
      "Hello world! ",
      time
    ] })
  ] });
}

export { App as default };
