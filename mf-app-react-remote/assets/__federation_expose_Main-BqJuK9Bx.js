import { importShared } from './__federation_fn_import-DTmPC8t8.js';
import { j as jsxRuntimeExports } from './jsx-runtime-BgsmXpcd.js';
import { r as reactDomExports } from './__federation_shared_react-dom-81eQxVv-.js';
import App from './__federation_expose_App-CsIS3YdK.js';

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
