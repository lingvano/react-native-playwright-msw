import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:19006/');

  await expect(page.getByText('Hello!')).toBeVisible();
});
