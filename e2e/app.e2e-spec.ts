import { TemplateRefTestPage } from './app.po';

describe('template-ref-test App', () => {
  let page: TemplateRefTestPage;

  beforeEach(() => {
    page = new TemplateRefTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
