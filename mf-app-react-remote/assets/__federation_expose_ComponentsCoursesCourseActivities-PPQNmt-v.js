import { importShared } from './__federation_fn_import-DTmPC8t8.js';
import { _ as __federation_method_getRemote, a as __federation_method_unwrapDefault } from './_virtual___federation__-DBEDY3nC.js';
import { j as jsxRuntimeExports } from './jsx-runtime-BgsmXpcd.js';

const __federation_var_mfappstorecoursesactivitiesstorecourseactivities = await __federation_method_getRemote("@mf-app/store" , "./courses/activities/store.course-activities");
 let useCourseActivityStore = __federation_method_unwrapDefault(__federation_var_mfappstorecoursesactivitiesstorecourseactivities); 
const {useEffect} = await importShared('react');

const CourseActivities = ({
  title,
  fullWidth,
  onSelected
}) => {
  const { actions, loading, data } = useCourseActivityStore();
  useEffect(() => {
    actions.fetchActivities();
  }, [actions]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-black dark:text-white", children: "Fetching Activities..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `${fullWidth ? "w-full " : "w-auto "}p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xl font-bold leading-none text-gray-900 dark:text-white", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault();
                alert("Coming soon");
              },
              className: "text-sm font-medium text-blue-600 hover:underline dark:text-blue-500",
              children: "View all"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flow-root", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ul",
          {
            role: "list",
            className: "divide-y divide-gray-200 dark:divide-gray-700",
            children: data?.activities.map((activity) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "py-3 sm:py-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer", onClick: () => onSelected && onSelected(activity.id), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  className: "w-8 h-8 rounded-full",
                  src: activity.badge_image,
                  alt: activity.name
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 ms-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: activity.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 truncate dark:text-gray-400", children: activity.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: [
                activity.mark_total,
                " points"
              ] })
            ] }) }, activity.id))
          }
        ) })
      ]
    }
  ) }) });
};

export { CourseActivities as default };
