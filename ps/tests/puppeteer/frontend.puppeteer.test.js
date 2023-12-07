/**
 * @jest-environment jsdom
 */

const puppeteer = require('puppeteer');

describe('Frontend UI Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true});

  });

  afterAll(async () => {
    await browser.close();
  });

  test('has a green background color', async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Replace with your app's URL
    const backgroundColor = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    expect(backgroundColor).toBe('rgb(0, 128, 0)'); // This is the RGB value for green
  });
});
