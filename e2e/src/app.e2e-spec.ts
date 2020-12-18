import {browser, by, element, logging} from 'protractor';

describe('Odin App', () => {

  it('should display top page', async () => {
    await browser.get(browser.baseUrl);
    expect(await element(by.css('.header__site-name')).getText()).toEqual('Odin');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
