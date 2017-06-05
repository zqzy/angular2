import { NgformPage } from './app.po';

describe('ngform App', () => {
  let page: NgformPage;

  beforeEach(() => {
    page = new NgformPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
