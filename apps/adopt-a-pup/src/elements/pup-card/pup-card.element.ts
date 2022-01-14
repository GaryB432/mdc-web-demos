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
    this.innerHTML = `
    <div
      class="adopt-a-pup-image 
        mdc-card__media
        mdc-card__media--square" 
        style></div>
      <div class="adopt-a-pup-card__text-label">name</div>
      <div class="adopt-a-pup-card__secondary mdc-typography--body2">notes</div>
      <div class="mdc-card__actions">
      <div class="mdc-card__action-buttons">
        <button
          class="mdc-button mdc-card__action mdc-card__action--button adopt-form__button"
        >
          <span class="mdc-button__ripple"></span
          ><i class="material-icons mdc-button__icon adopt-form__button-icon"
            >pets</i
          ><span class="mcd-button__label adopt-form__button-text">Adopt</span>
        </button>
      </div>
    </div>
    `;
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
