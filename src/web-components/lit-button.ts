
import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import {createComponent} from '@lit/react';
import React from "react";
import { TWStyles } from "../twlit";
// import { TWStyles } from "../tw";
class LitButton extends LitElement {

    @property({ attribute: 'text', type: String })
    public text = 'Click me';

    @property({ attribute: "count", type: String})
    count = "0";

    @property({ attribute: "full-width", type: Boolean })
    fullWidth = false;

    @property({ attribute: 'disabled', type: Boolean })
    disabled = false;

    @property()
    type: 'button' | 'reset' | 'submit' = 'button';
    
updated() {
    console.log('updated', this.count);
    const button = this.shadowRoot?.querySelector('button');
    if (button) {
      if ( this.fullWidth) {
        button.classList.add('w-full');
      } else {
        button.classList.remove('w-full');
      }

        button.disabled = this.disabled;
    }

    
}

handleClick() {
  console.log('submitting');
  this.dispatchEvent(new CustomEvent("click"));
    // const updatedCount = Number(this.count) + 1;
    // this.dispatchEvent(new CustomEvent("count-updated", { detail: updatedCount }));
    // this.count = updatedCount.toString();
    // this.requestUpdate();
}

  render() {
    return html`<button type="${this.type}" @click=${this.handleClick} class="disabled:opacity-15 bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        ${this.text}
    </button>`;
  }

  static styles = [
    TWStyles,
    css`
      /* Add any additional custom styles here */
    `
  ];
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
