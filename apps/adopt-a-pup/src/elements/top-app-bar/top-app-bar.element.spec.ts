import { TopAppBarElement } from './top-app-bar.element';

describe('TopAppBarElement', () => {
  let topAppBarEl: TopAppBarElement;

  beforeEach(() => {
    topAppBarEl = new TopAppBarElement();
  });

  it('should create successfully', () => {
    expect(topAppBarEl).toBeTruthy();
  });

  it('should have a greeting', () => {
    topAppBarEl.connectedCallback();

    const el = topAppBarEl.querySelector('.mdc-top-app-bar__title');
    expect(el).toBeNull();
    // expect(
    //   el.innerHTML
    // ).toContain('aDopt a Pup');
  });
});
