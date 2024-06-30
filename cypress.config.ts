import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 're32p1',
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      "reportDir": "cypress/reports/mocha",
      "screenshotOnRunFailure": true,
      "quite": true,
      "overwrite": false,
      "html": false,
      "json": true
    }

  },
  screenshotsFolder: "cypress/reports/mochareports/assets",
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
