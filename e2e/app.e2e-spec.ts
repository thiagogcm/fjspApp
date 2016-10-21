import { FjspAppPage } from './app.po';

describe('fjsp-app App', function() {
  let page: FjspAppPage;

  beforeEach(() => {
    page = new FjspAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
