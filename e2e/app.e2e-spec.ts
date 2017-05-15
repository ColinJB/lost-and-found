import { LongLostFriendsPage } from './app.po';

describe('long-lost-friends App', () => {
  let page: LongLostFriendsPage;

  beforeEach(() => {
    page = new LongLostFriendsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
