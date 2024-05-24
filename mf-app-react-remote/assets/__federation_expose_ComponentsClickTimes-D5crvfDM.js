import { _ as __federation_method_getRemote, a as __federation_method_unwrapDefault, j as jsxRuntimeExports } from './_virtual___federation__-Cmqv1fMr.js';

const __federation_var_mfappstorecounterstorecounter = await __federation_method_getRemote("@mf-app/store" , "./counter/store.counter");
 let useStore = __federation_method_unwrapDefault(__federation_var_mfappstorecounterstorecounter); 
const ClickTimes = () => {
  const { count } = useStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("small", { children: [
    "Global Counts: ",
    count
  ] });
};

export { ClickTimes as default };
