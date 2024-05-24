import { importShared } from './__federation_fn_import-DTmPC8t8.js';
import { j as jsxRuntimeExports } from './_virtual___federation__-Cmqv1fMr.js';
import ReactButton from './__federation_expose_ComponentsReactButton-C3vtkFgI.js';
import ClickTimes from './__federation_expose_ComponentsClickTimes-D5crvfDM.js';
import Login from './__federation_expose_ComponentsAuthLogin-D5cWcrcB.js';

const {useState} = await importShared('react');
function App() {
  const [count, setCount] = useState(0);
  const time = Date.now();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Remote App" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Login, {}),
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
