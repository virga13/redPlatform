const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // specPattern: '**/*.cy.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
});
