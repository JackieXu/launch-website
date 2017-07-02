import { KarmoLaunchPage } from './app.po';

describe('karmo-launch App', () => {
  let page: KarmoLaunchPage;

  beforeEach(() => {
    page = new KarmoLaunchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
