import { LitElement, html, CSSResultGroup, css } from "lit";
import { property } from "lit/decorators.js";
import {createComponent} from '@lit/react';
import React from "react";


/**
 * Buttons represent actions that are available to the user.
 * @slot default - This is an unnamed slot (the default slot) for the button's label
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 * @attr {"default" | "primary" | "success" | "neutral" | "warning" | "danger" | "text"} [variant="default"] - The button's theme variant.
 * @attr {"small" | "medium" | "large"} [size="medium"] - The button's size.
 * @attr {boolean} [caret] - Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.
 * @attr {boolean} [disabled] - Disables the button.
 * @attr {boolean} [loading] - Draws the button in a loading state.
 * @attr {boolean} [outline] - Draws an outlined button.
 * @attr {boolean} [pill] - Draws a pill-style button with rounded edges.
 * @attr {boolean} [circle] - Draws a circular icon button. When this attribute is present, the button expects a single `<grok-wc-icon>` in the default slot.
 * @attr {string} [href] - When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
 * @attr {"_blank" | "_parent" | "_self" | "_top"} [target="_blank"] - Tells the browser where to open the link. Only used when `href` is present.
 * @attr {string} [download] - Tells the browser to download the linked file as this filename. Only used when `href` is present.
 * @attr {Icon} [prefix-icon] - The name of the icon to display as a prefix to the button's label.
 * @attr {Icon} [suffix-icon] - The name of the icon to display as a suffix to the button's label.
 * @cssprop --gwc-button-border-radius - The border radius of the button.
 * @cssprop --gwc-button-border-top-color - The top border color of the button.
 * @cssprop --gwc-button-border-bottom-color - The bottom border color of the button.
 * @cssprop --gwc-button-border-left-color - The left border color of the button.
 * @cssprop --gwc-button-border-right-color - The right border color of the button.
 * @cssprop --gwc-button-border-width - The border width of the button.
 * @cssprop --gwc-button-color - The text color of the button.
 * @cssprop --gwc-button-font-size - The font size of the button.
 * @cssprop --gwc-button-font-weight - The font weight of the button.
 * @cssprop --gwc-button-background-color - The background color of the button.
 * @cssprop --gwc-button-background-color-on-hover - The background color of the button when hovered.
 * @cssprop --gwc-button-border-color-on-hover - The border color of the button when hovered.
 * @cssprop --gwc-button-color-on-hover - The text color of the button when hovered.
 * @cssprop --gwc-button-background-color-on-click - The background color of the button when clicked.
 * @cssprop --gwc-button-border-color-on-click - The border color of the button when clicked.
 * @cssprop --gwc-button-color-on-click - The text color of the button when clicked.
 */
class LitButton extends LitElement {

    @property({ attribute: "count", type: String})
    count = "0";
    
//   @property({ attribute: "variant", reflect: true })
//   variant?: ButtonVariant;

//   @property({ attribute: "size", reflect: true })
//   size?: ButtonSize;

//   @property({ attribute: "caret", type: Boolean, reflect: true })
//   caret?: boolean;

//   @property({ attribute: "disabled", type: Boolean, reflect: true })
//   disabled?: boolean;

//   @property({ attribute: "loading", type: Boolean, reflect: true })
//   loading?: boolean;

//   @property({ attribute: "outline", type: Boolean, reflect: true })
//   outline?: boolean;

//   @property({ attribute: "pill", type: Boolean, reflect: true })
//   pill?: boolean;

//   @property({ attribute: "circle", type: Boolean, reflect: true })
//   circle?: boolean;

//   @property({ attribute: "href", type: String })
//   href?: string;

//   @property({ attribute: "target" })
//   target?: ButtonTarget;

//   @property({ attribute: "download" })
//   download?: string;

//   @property({ attribute: "prefix-icon", reflect: true })
//   prefixIcon?: string;

//   @property({ attribute: "suffix-icon", reflect: true })
//   suffixIcon?: string;

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
        clicked ${this.count} times
    </button>`;
  }

  static styles: CSSResultGroup = css`
  
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
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