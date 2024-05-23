import { importShared } from './__federation_fn_import-DTmPC8t8.js';
import ReactButton, { j as jsxRuntimeExports } from './__federation_expose_ComponentsReactButton-DYATPGiG.js';

const reactLogo = "/mf-app-react-remote/assets/react-CHdo91hT.svg";

const viteLogo = "/vite.svg";

const {useState} = await importShared('react');
function App() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: viteLogo, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Vite + React" }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold underline", children: "Hello world!" })
  ] });
}

export { App as default };
