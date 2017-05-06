import { WebworkerPage } from './app.po';

describe('webworker App', () => {
  let page: WebworkerPage;

  beforeEach(() => {
    page = new WebworkerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
