import { config as baseConfig } from "./wdio.base.conf.js";

const allowedChromeCliOptions = ["--headless"];

const chromeFlags = [
  "--window-size=1280,1024", // general settings
  "--disable-background-timer-throttling", "--disable-renderer-backgrounding",
  "--disable-backgrounding-occluded-windows", "--disable-background-media-suspend", // throttling settings
  "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage", // container settings
  ...process.argv.filter((flag) => allowedChromeCliOptions.includes(flag)),
];

export const config = {
  ...baseConfig,

  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: chromeFlags,
      },
    },
  ],
};
