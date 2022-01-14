import { MDCTabBar } from '@material/tab-bar';
import { MDCTopAppBar } from '@material/top-app-bar';
import { pups, PupsDetail } from '../../pup';
import '../tab-bar/tab-bar.element';
import './top-app-bar.element.scss';
const html = require('./top-app-bar.element.html');

export class TopAppBarElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = html;
    void new MDCTopAppBar(this);
    const el = this.querySelector('mdd-tab-bar');
    if (el) {
      const tabBar = new MDCTabBar(el);

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
}
customElements.define('mdd-top-app-bar', TopAppBarElement);
