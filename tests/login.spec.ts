import { test, expect } from '@playwright/test';

test('login com credenciais válidas', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});