import './app.element.scss';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'adopt-a-pup';
    this.innerHTML = `

    <button class="foo-button mdc-button mdc-button--raised">
      <span class="mdc-button__ripple"></span>
      <span class="mdc-button__label">${title}</span>
    </button>

      `;
  }
}
customElements.define('mdc-web-demos-root', AppElement);
