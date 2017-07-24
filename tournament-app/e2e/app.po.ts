import { browser, element, by } from 'protractor';

export class TournamentAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tma-root h1')).getText();
  }
}
