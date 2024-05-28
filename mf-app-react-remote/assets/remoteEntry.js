const exportSet = new Set(['Module', '__esModule', 'default', '_export_sfc']);
      let moduleMap = {
"./App":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './App');
      return __federation_import('./__federation_expose_App-CsIS3YdK.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./main":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './main');
      return __federation_import('./__federation_expose_Main-BqJuK9Bx.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./module.d":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './module.d');
      return __federation_import('./__federation_expose_ModuleD-l0sNRNKZ.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./twlit":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './twlit');
      return __federation_import('./__federation_expose_Twlit-q2Swf35a.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./vite-env.d":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './vite-env.d');
      return __federation_import('./__federation_expose_Vite-envD-l0sNRNKZ.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./components/ClickTimes":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './components/ClickTimes');
      return __federation_import('./__federation_expose_ComponentsClickTimes-5w5q9RSc.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./components/ReactButton":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './components/ReactButton');
      return __federation_import('./__federation_expose_ComponentsReactButton-L6DmDyzs.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./web-components/lit-button":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './web-components/lit-button');
      return __federation_import('./__federation_expose_Web-componentsLit-button-JdkZp17d.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./components/auth/Login":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './components/auth/Login');
      return __federation_import('./__federation_expose_ComponentsAuthLogin-1kGwc1ys.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./components/courses/CourseActivities":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './components/courses/CourseActivities');
      return __federation_import('./__federation_expose_ComponentsCoursesCourseActivities-DKmX-D3z.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},
"./components/courses/CourseActivity":()=>{
      dynamicLoadingCss(["style-BhJEV8N1.css"], false, './components/courses/CourseActivity');
      return __federation_import('./__federation_expose_ComponentsCoursesCourseActivity-CSCih9Ss.js').then(module =>Object.keys(module).every(item => exportSet.has(item)) ? () => module.default : () => module)},};
    const seen = {};
    const dynamicLoadingCss = (cssFilePaths, dontAppendStylesToHead, exposeItemName) => {
      const metaUrl = import.meta.url;
      if (typeof metaUrl == 'undefined') {
        console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');
        return
      }
      const curUrl = metaUrl.substring(0, metaUrl.lastIndexOf('remoteEntry.js'));

      cssFilePaths.forEach(cssFilePath => {
        const href = curUrl + cssFilePath;
        if (href in seen) return
        seen[href] = true;
        if (dontAppendStylesToHead) {
          const key = 'css__remote_app__' + exposeItemName;
          if (window[key] == null) window[key] = [];
          window[key].push(href);
        } else {
          const element = document.head.appendChild(document.createElement('link'));
          element.href = href;
          element.rel = 'stylesheet';
        }
      });
    };
    async function __federation_import(name) {
        return import(name);
    }    const get =(module) => {
      if(!moduleMap[module]) throw new Error('Can not find remote module ' + module)
      return moduleMap[module]();
    };
    const init =(shareScope) => {
      globalThis.__federation_shared__= globalThis.__federation_shared__|| {};
      Object.entries(shareScope).forEach(([key, value]) => {
        const versionKey = Object.keys(value)[0];
        const versionValue = Object.values(value)[0];
        const scope = versionValue.scope || 'default';
        globalThis.__federation_shared__[scope] = globalThis.__federation_shared__[scope] || {};
        const shared= globalThis.__federation_shared__[scope];
        (shared[key] = shared[key]||{})[versionKey] = versionValue;
      });
    };

export { dynamicLoadingCss, get, init };
