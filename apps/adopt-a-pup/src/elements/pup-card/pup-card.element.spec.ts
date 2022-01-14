import { PupCardElement } from './pup-card.element';

describe('PupCardElement', () => {
  let pupCardEl: PupCardElement;

  beforeEach(() => {
    pupCardEl = new PupCardElement();
  });

  it('should create successfully', () => {
    expect(pupCardEl).toBeTruthy();
  });

  it('should have a greeting', () => {
    pupCardEl.connectedCallback();

    const el = pupCardEl.querySelector('.adopt-form__button-text');
    expect(el).toBeNull();
  });
});
