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
    button {
      
      cursor: pointer;
      outline: 0;
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 6px 12px;
      font-size: 1rem;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      color: #0d6efd;
      border-color: #0d6efd;
    }

    button::hover {
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
    }
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