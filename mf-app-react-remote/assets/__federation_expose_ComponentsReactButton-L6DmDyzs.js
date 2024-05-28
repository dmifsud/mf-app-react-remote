import { _ as __federation_method_getRemote, a as __federation_method_unwrapDefault } from './_virtual___federation__-DBEDY3nC.js';
import { j as jsxRuntimeExports } from './jsx-runtime-BgsmXpcd.js';

const __federation_var_mfappstorecounterstorecounter = await __federation_method_getRemote("@mf-app/store" , "./counter/store.counter");
 let useCounterStore = __federation_method_unwrapDefault(__federation_var_mfappstorecounterstorecounter); 
const ReactButton = ({ text }) => {
  const { count, actions } = useCounterStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", onClick: () => actions.inc(), children: [
    text ?? "count is",
    " ",
    count
  ] });
};

export { ReactButton as default };
