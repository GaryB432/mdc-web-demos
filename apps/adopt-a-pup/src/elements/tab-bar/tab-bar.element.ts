import './tab-bar.element.scss';

const buttonH = (textLabel: string, tabIndex: number) => `
<button class="mdc-tab adopt-a-pup-tab" role="tab" tabindex="${tabIndex}">
  <span class="mdc-tab__content">
    <span class="mdc-tab__text-label">${textLabel}</span>
  </span>
  <span class="mdc-tab-indicator adopt-a-pup-tab-indicator">
    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
  </span>
  <span class="mdc-tab__ripple"></span>
</button>`;

export class TabBarElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const tabs = ['Puppers', 'Doggos', 'Woofers'];
    this.innerHTML = `
    <div class="mdc-tab-scroller">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
        ${tabs.map((t, i) => buttonH(t, i)).join('')}
        </div>
      </div>
  
      `;
  }
}

customElements.define('mdd-tab-bar', TabBarElement);
