import { FightManagerPage } from './app.po';

describe('fight-manager App', () => {
  let page: FightManagerPage;

  beforeEach(() => {
    page = new FightManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
