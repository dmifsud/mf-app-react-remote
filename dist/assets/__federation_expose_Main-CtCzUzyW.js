import { importShared } from './__federation_fn_import-DTmPC8t8.js';
import { j as jsxRuntimeExports } from './__federation_expose_ComponentsReactButton-Ci3_FmW1.js';
import { r as reactDomExports } from './__federation_shared_react-dom-81eQxVv-.js';
import App from './__federation_expose_App-dxoLr5J_.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
