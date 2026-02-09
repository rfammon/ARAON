
(async () => {
  try {
    
const { chromium } = require('playwright');
const path = require('path');

const BASE_URL = 'http://localhost:5173';
const OUTPUT_DIR = 'c:/BMAD-workflow/apps/arboria-v3/public/docs/education/images/onboarding';

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  async function takeScreenshot(name, selector = null) {
    const fullPath = path.join(OUTPUT_DIR, `${name}.png`);
    if (selector) {
      await page.locator(selector).screenshot({ path: fullPath });
    } else {
      await page.screenshot({ path: fullPath });
    }
    console.log(`📸 Saved ${name}.png`);
  }

  try {
    console.log('--- Starting Onboarding Screenshot Capture ---');

    console.log(`Navigating to ${BASE_URL}/inventory`);
    await page.goto(`${BASE_URL}/inventory`);
    await page.waitForLoadState('networkidle');
    await takeScreenshot('01-inventory-main');

    // Filter button usually has an icon or text "Filtrar"
    const filterBtn = page.getByRole('button').filter({ hasText: /Filtrar/i }).first();
    if (await filterBtn.isVisible()) {
      await filterBtn.click();
      await page.waitForTimeout(1000);
      await takeScreenshot('01-inventory-filters');
      await page.keyboard.press('Escape');
    }

    // 2. Planning
    console.log(`Navigating to ${BASE_URL}/planning`);
    await page.goto(`${BASE_URL}/planning`);
    await page.waitForLoadState('networkidle');
    await takeScreenshot('03-planning-dashboard');

    const newPlanBtn = page.getByRole('button').filter({ hasText: /Novo Plano/i }).first();
    if (await newPlanBtn.isVisible()) {
      await newPlanBtn.click();
      await page.waitForLoadState('networkidle');
      await takeScreenshot('03-planning-form');
    }

    // 3. Execution
    console.log(`Navigating to ${BASE_URL}/execution`);
    await page.goto(`${BASE_URL}/execution`);
    await page.waitForLoadState('networkidle');
    await takeScreenshot('05-execution-main');

    // 4. Reports
    console.log(`Navigating to ${BASE_URL}/reports`);
    await page.goto(`${BASE_URL}/reports`);
    await page.waitForLoadState('networkidle');
    await takeScreenshot('06-reports-main');

    console.log('--- All screenshots captured successfully ---');
  } catch (err) {
    console.error('❌ Error during capture:', err);
  } finally {
    await browser.close();
  }
}

capture();

  } catch (error) {
    console.error('❌ Automation error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
})();
