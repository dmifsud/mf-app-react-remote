import { j as jsxRuntimeExports } from './jsx-runtime-BgsmXpcd.js';
import LitButtonReact from './__federation_expose_Web-componentsLit-button-JdkZp17d.js';

const CourseActivity = ({ activity }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end px-4 pt-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center pb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-24 h-24 mb-3 rounded-full shadow-lg", src: activity.badge_image, alt: "Bonnie image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-1 text-center px-4 text-xl font-medium text-gray-900 dark:text-white", children: activity.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-4 text-center text-sm text-gray-500 dark:text-gray-400", children: activity.lead_text }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-4 text-sm text-black dark:text-white", children: activity.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LitButtonReact, { text: "View Course", onClick: () => alert("Coming soon") }) })
    ] })
  ] });
};

export { CourseActivity as default };
