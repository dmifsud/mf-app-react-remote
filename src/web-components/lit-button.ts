import { LitElement, html, CSSResultGroup, css } from "lit";
import { property } from "lit/decorators.js";
import {createComponent} from '@lit/react';
import React from "react";

class LitButton extends LitElement {

    @property({ attribute: 'text', type: String })
    public text = 'Click me';

    @property({ attribute: "count", type: String})
    count = "0";
    
updated() {
    console.log('updated', this.count);
}

handleClick() {
    const updatedCount = Number(this.count) + 1;
    this.dispatchEvent(new CustomEvent("count-updated", { detail: updatedCount }));
    this.count = updatedCount.toString();
    this.requestUpdate();
}

  render() {
    // tailwind won't work with a lit element due to shadow dom
    return html`<button type="button" @click=${this.handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        ${this.text} :clicked ${this.count} times
    </button>`;
  }

  static styles: CSSResultGroup = css`
  
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-button": LitButton;
  }
}

const LitButtonReact = createComponent({
    tagName: 'lit-button',
    elementClass: LitButton,
    react: React,
    events: {
      onCountUpdated: 'count-updated',
    },
  });

customElements.define("lit-button", LitButton);

export default LitButtonReact;