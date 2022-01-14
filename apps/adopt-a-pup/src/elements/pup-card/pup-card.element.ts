import { Pup } from '../../pup';
import './pup-card.element.scss';

export class PupCardElement extends HTMLElement {
  private _pup: Pup | null = null;

  public get pup(): Pup {
    return this._pup;
  }
  public set pup(v: Pup) {
    this._pup = v;
    this.update();
  }

  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = require('./pup-card.element.html');
    this.classList.add('mdc-card');
    this.classList.add('adopt-a-pup-card');
  }
  private update(): void {
    Promise.resolve().then(() => {
      const img = this.querySelector<HTMLDivElement>('.adopt-a-pup-image');
      img.style.backgroundImage = `url('${this._pup.img}'`;
      const label = this.querySelector<HTMLDivElement>(
        '.adopt-a-pup-card__text-label'
      );
      label.textContent = this.pup.name;
      const secondary = this.querySelector<HTMLDivElement>(
        '.adopt-a-pup-card__secondary'
      );
      secondary.textContent = this.pup.notes;
    });
  }
}

customElements.define('mdd-pup-card', PupCardElement);
