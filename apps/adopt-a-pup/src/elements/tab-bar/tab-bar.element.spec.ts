import { TabBarElement } from './tab-bar.element';

describe('TabBarElement', () => {
  let tabBarEl: TabBarElement;

  beforeEach(() => {
    tabBarEl = new TabBarElement();
  });

  it('should create successfully', () => {
    expect(tabBarEl).toBeTruthy();
  });

  it('should have a greeting', () => {
    tabBarEl.connectedCallback();

    const tb = tabBarEl.querySelector('.mdc-tab-scroller__scroll-content');

    expect(tb.querySelectorAll('button').length).toEqual(3);
  });
});
