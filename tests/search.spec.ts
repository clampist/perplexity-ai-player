import { test, expect } from '@playwright/test';

test.describe('Perplexity.ai homepage', () => {
  test('loads homepage and returns results for a basic search', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveURL('https://www.perplexity.ai/');
    await expect(page).toHaveTitle(/perplexity/i);

    let searchBox = page.locator('#ask-input[contenteditable="true"]');
    if ((await searchBox.count()) === 0) {
      searchBox = page.getByRole('textbox').first();
    }

    await expect(searchBox).toBeVisible();

    const query = 'What is Playwright end-to-end testing?';
    await searchBox.fill(query);
    await searchBox.press('Enter');

    await page.waitForURL((url) => url.href.includes('/search/'), { timeout: 30_000 });
    await expect(page.locator('main')).toContainText(/Playwright/i);
  });
});

