import { MeanAppAngular4Page } from './app.po';

describe('mean-app-angular4 App', function() {
  let page: MeanAppAngular4Page;

  beforeEach(() => {
    page = new MeanAppAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
