import { TournamentAppPage } from './app.po';

describe('tournament-app App', function() {
  let page: TournamentAppPage;

  beforeEach(() => {
    page = new TournamentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tma works!');
  });
});
