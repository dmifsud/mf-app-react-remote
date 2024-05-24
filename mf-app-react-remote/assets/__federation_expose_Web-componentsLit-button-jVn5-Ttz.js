import { importShared } from './__federation_fn_import-DTmPC8t8.js';
import { u, f } from './reactive-element-BAzWzci0.js';
import { TWStyles } from './__federation_expose_Twlit-q2Swf35a.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f},r=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$1(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=new Set(["children","localName","ref","style","className"]),n=new WeakMap,t=(e,t,o,l,a)=>{const s=a?.[t];void 0===s?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):o!==l&&((e,t,o)=>{let l=n.get(e);void 0===l&&n.set(e,l=new Map);let a=l.get(t);void 0!==o?void 0===a?(l.set(t,a={handleEvent:o}),e.addEventListener(t,a)):a.handleEvent=o:void 0!==a&&(l.delete(t),e.removeEventListener(t,a));})(e,s,o);},o=({react:n,tagName:o,elementClass:l,events:a,displayName:s})=>{const c=new Set(Object.keys(a??{})),r=n.forwardRef(((s,r)=>{const i=n.useRef(new Map),d=n.useRef(null),f={},u={};for(const[n,t]of Object.entries(s))e.has(n)?f["className"===n?"class":n]=t:c.has(n)||n in l.prototype?u[n]=t:f[n]=t;return n.useLayoutEffect((()=>{if(null===d.current)return;const e=new Map;for(const n in u)t(d.current,n,s[n],i.current.get(n),a),i.current.delete(n),e.set(n,s[n]);for(const[e,n]of i.current)t(d.current,e,void 0,n,a);i.current=e;})),n.useLayoutEffect((()=>{d.current?.removeAttribute("defer-hydration");}),[]),f.suppressHydrationWarning=!0,n.createElement(o,{...f,ref:n.useCallback((e=>{d.current=e,"function"==typeof r?r(e):null!==r&&(r.current=e);}),[r])})}));return r.displayName=s??l.name,r};

var __defProp = Object.defineProperty;
var __decorateClass = (decorators, target, key, kind) => {
  var result = void 0 ;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(target, key, result) ) || result;
  if (result)
    __defProp(target, key, result);
  return result;
};
const {LitElement,html,css} = await importShared('lit');
const React = await importShared('react');
class LitButton extends LitElement {
  constructor() {
    super(...arguments);
    this.text = "Click me";
    this.count = "0";
    this.fullWidth = false;
    this.disabled = false;
    this.type = "button";
  }
  updated() {
    console.log("updated", this.count);
    const button = this.shadowRoot?.querySelector("button");
    if (button) {
      if (this.fullWidth) {
        button.classList.add("w-full");
      } else {
        button.classList.remove("w-full");
      }
      button.disabled = this.disabled;
    }
  }
  handleClick() {
    console.log("submitting");
    this.dispatchEvent(new CustomEvent("submit"));
  }
  render() {
    return html`<button type="${this.type}" @submit=${this.handleClick} @click=${this.handleClick} class="disabled:opacity-15 bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        ${this.text}
    </button>`;
  }
  static {
    this.styles = [
      TWStyles,
      css`
      /* Add any additional custom styles here */
    `
    ];
  }
}
__decorateClass([
  n$1({ attribute: "text", type: String })
], LitButton.prototype, "text");
__decorateClass([
  n$1({ attribute: "count", type: String })
], LitButton.prototype, "count");
__decorateClass([
  n$1({ attribute: "full-width", type: Boolean })
], LitButton.prototype, "fullWidth");
__decorateClass([
  n$1({ attribute: "disabled", type: Boolean })
], LitButton.prototype, "disabled");
__decorateClass([
  n$1()
], LitButton.prototype, "type");
const LitButtonReact = o({
  tagName: "lit-button",
  elementClass: LitButton,
  react: React,
  events: {
    onCountUpdated: "count-updated"
  }
});
customElements.define("lit-button", LitButton);

export { LitButtonReact as default };
