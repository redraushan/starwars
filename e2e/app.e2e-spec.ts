import { StarWarsPage } from './app.po';

describe('star-wars App', () => {
  let page: StarWarsPage;

  beforeEach(() => {
    page = new StarWarsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
