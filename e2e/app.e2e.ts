import { CraftyrolPage } from './app.po';

describe('craftyrol App', function() {
  let page: CraftyrolPage;

  beforeEach(() => {
    page = new CraftyrolPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('craftyrol works!');
  });
});
