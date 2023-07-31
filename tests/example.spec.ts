import { test, expect } from '@playwright/test';
import { worker } from '../mocks/browser';
test('has title', async ({ page }) => {
  await page.goto('http://localhost:19006/');

  await expect(page.getByText('Mock Response')).toBeVisible();
});
