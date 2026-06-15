import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({
      path: `test-results/${name}.png`
    });
  }
}