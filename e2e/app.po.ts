export class CraftyrolPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('craftyrol-app h1')).getText();
  }
}
