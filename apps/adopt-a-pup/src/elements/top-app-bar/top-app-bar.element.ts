import { MDCTabBar } from '@material/tab-bar';
import { MDCTopAppBar } from '@material/top-app-bar';
import { pups, PupsDetail } from '../../pup';
import '../tab-bar/tab-bar.element';
import './top-app-bar.element.scss';

const html = `
<div class="mdc-top-app-bar__row">
  <section
    class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
  >
    <button
      class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
      aria-label="Open navigation menu"
    >
      menu
    </button>
    <span class="mdc-top-app-bar__title">aDopt a Pup</span>
  </section>
</div>
  <mdd-tab-bar class="mdc-tab-bar" role="tablist"></mdd-tab-bar>
</div>
`;

export class TopAppBarElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = html;
    void new MDCTopAppBar(this);
    const tabBar = new MDCTabBar(this.querySelector('mdd-tab-bar'));

    tabBar.listen('MDCTabBar:activated', (activatedEvent: CustomEvent) => {
      this.dispatchEvent(
        new CustomEvent<PupsDetail>('PupsTabBar:selected', {
          detail: {
            pupType: 'tbd',
            pups: pups.filter((_p, i) => i > activatedEvent.detail.index),
          },
        })
      );
    });
    setTimeout(() => {
      tabBar.activateTab(0);
    }, 0);
  }
}
customElements.define('mdd-top-app-bar', TopAppBarElement);
