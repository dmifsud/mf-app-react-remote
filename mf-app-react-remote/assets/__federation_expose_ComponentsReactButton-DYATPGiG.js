import { r as reactExports } from './__federation_shared_react-DYlhdcjt.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const remotesMap = {
'@mf-app/store':{url:'https://dmifsud.github.io/mf-app-store/mf-app-store/assets/remoteEntry.js',format:'esm',from:'vite'}
};
                const loadJS = async (url, fn) => {
                    const resolvedUrl = typeof url === 'function' ? await url() : url;
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = fn;
                    script.src = resolvedUrl;
                    document.getElementsByTagName('head')[0].appendChild(script);
                };

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        if (remoteFrom === 'webpack') {
                            return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
                        }
                        return module
                    })
                }
                
                function merge(obj1, obj2) {
                  const mergedObj = Object.assign(obj1, obj2);
                  for (const key of Object.keys(mergedObj)) {
                    if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                      mergedObj[key] = merge(mergedObj[key], obj2[key]);
                    }
                  }
                  return mergedObj;
                }

                const wrapShareModule = remoteFrom => {
                  return merge({
                    'react':{'undefined':{get:()=>get(new URL('__federation_shared_react-DYlhdcjt.js', import.meta.url).href, remoteFrom), loaded:1}},'react-dom':{'undefined':{get:()=>get(new URL('__federation_shared_react-dom-81eQxVv-.js', import.meta.url).href, remoteFrom), loaded:1}},'lit':{'undefined':{get:()=>get(new URL('__federation_shared_lit-7fI1iU3V.js', import.meta.url).href, remoteFrom), loaded:1}},'zustand':{'undefined':{get:()=>get(new URL('__federation_shared_zustand-CKAI7VcA.js', import.meta.url).href, remoteFrom), loaded:1}}
                  }, (globalThis.__federation_shared__ || {})['default'] || {});
                };

                async function __federation_import(name) {
                    return import(name);
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if ('var' === remote.format) {
                            // loading js with script tag
                            return new Promise(resolve => {
                                const callback = () => {
                                    if (!remote.inited) {
                                        remote.lib = window[remoteId];
                                        remote.lib.init(wrapShareModule(remote.from));
                                        remote.inited = true;
                                    }
                                    resolve(remote.lib);
                                };
                                return loadJS(remote.url, callback);
                            });
                        } else if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule(remote.from);
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_unwrapDefault(module) {
                    return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module') ? module.default : module
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const __federation_var_mfappstorecounterstorecounter = await __federation_method_getRemote("@mf-app/store" , "./counter/store.counter");
 let useStore = __federation_method_unwrapDefault(__federation_var_mfappstorecounterstorecounter); 
const ReactButton = ({ text }) => {
  const { count, inc } = useStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", onClick: () => inc(), children: [
    text ?? "count is",
    " ",
    count
  ] });
};

export { ReactButton as default, jsxRuntimeExports as j };
