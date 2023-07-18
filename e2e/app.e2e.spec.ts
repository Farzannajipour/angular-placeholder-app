import { test, expect, PlaywrightTestConfig } from '@playwright/test';
import { environment } from 'src/environments/environment.prod';

const appUrl = environment.appUrl;
const testData = [
  { title: 'TITLE:', userId: 'USERID:', id: 'ID:', body: 'BODY:' },
];

const fixture: PlaywrightTestConfig = {
  use: {
    baseURL: appUrl,
  },
};

test.describe('Items Page', () => {
  test.use({ ...fixture });

  test.beforeEach(async ({ page }) => {
    await page.goto(appUrl);
  });

  test('should display 100 items', async ({ page }) => {
    await page.waitForSelector('.square');

    const items = await page.$$('.square');
    expect(items.length).toBe(100);
  });

  testData.forEach(({ title, userId }) => {
    test(`should display item with label ${title} and update to ${userId}`, async ({
      page,
    }) => {
      await page.waitForSelector('.square');
      const items = await page.$$('.square');
      expect(items.length).toBe(100);

      for (const item of items) {
        const label = await item.$('.label');
        expect(label).toBeTruthy();
        let labelText = await label?.textContent();
        expect(labelText).toBe(title);
        // Click on the item to update the label text to userId
        await item?.click();
        const updatedLabelText = await label?.textContent();
        expect(updatedLabelText).toBe(userId);
      }
    });
  });
});
