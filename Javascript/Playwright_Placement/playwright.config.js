// @ts-check
import { defineConfig, devices } from '@playwright/test';

const browsers = [
  { name: 'chromium', device: { ...devices['Desktop Chrome'], channel: 'msedge' } },
  { name: 'firefox',  device: devices['Desktop Firefox'] },
  { name: 'webkit',   device: devices['Desktop Safari'] },
];

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: { trace: 'on', screenshot: 'on', video: 'on' },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      trace: 'on', // Enable trace for this project.
      video: 'on', // Enable video recording for this project.
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },]

  /*
  projects: browsers.flatMap(({ name, device }) => [
    // 1) logs in with this browser and saves its own auth file
    {
      name: `setup-${name}`,
      testMatch: /.*save-auth\.spec\.js/,
      use: { ...device },
    },
    // 2) all other test files, logged in with that browser's auth file
    {
      name,
      testIgnore: /.*save-auth\.spec\.js/,   // <-- changed line
      use: { ...device, storageState: `playwright/.auth/${name}.json` },
      dependencies: [`setup-${name}`],
    },
  ]), */
});