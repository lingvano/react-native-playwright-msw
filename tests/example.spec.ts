import { expect, test } from './test';
import { rest } from 'msw';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:19006/');

  await expect(page.getByText('Mock Response')).toBeVisible();
});

test('can intercept request', async ({ page, worker }) => {
  await worker.use(
    rest.get('/api', (_, response, context) =>
      response(
        context.status(200),
        context.json({ title: 'Intercepted Response' })
      )
    )
  );

  await page.goto('http://localhost:19006/');

  await expect(page.getByText('Intercepted Response')).toBeVisible();
});
