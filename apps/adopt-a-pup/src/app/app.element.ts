import '../elements/pup-card/pup-card.element';
import { PupCardElement } from '../elements/pup-card/pup-card.element';
import '../elements/top-app-bar/top-app-bar.element';
import { PupsDetail } from '../pup';
import './app.element.scss';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = require('./app.element.html');
    this.init();
  }
  private init(): void {
    const cards = document.querySelector('.cards');
    const menu = document.querySelector('.mdc-top-app-bar');
    if (menu) {
      menu.addEventListener(
        'PupsTabBar:selected',
        (selectedEvent: CustomEvent<PupsDetail>) => {
          cards.innerHTML = '';
          const cells = selectedEvent.detail.pups.map((pup) => {
            const cell = document.createElement('div');
            const card = document.createElement(
              'mdd-pup-card'
            ) as PupCardElement;
            cell.classList.add('mdc-layout-grid__cell');
            card.pup = { ...pup, img: `assets/${pup.img}` };
            cell.appendChild(card);
            return cell;
          });
          cards.append(...cells);
        }
      );
    }
  }
}

customElements.define('adopt-a-pup-root', AppElement);
