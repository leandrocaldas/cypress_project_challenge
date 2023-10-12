const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    USER_STANDARD: 'standard_user',
    USER_LOKED: 'locked_out_user',
    USER_PROBLEM: 'problem_user',
    USER_PERFORMANCE: 'performance_glitch_user',
    USER_ERROR: 'error_user',
    PASSWORD: 'secret_sauce',
  },
  e2e: {
    specPattern: 'cypress/integration/*/*',
    chromeWebSecurity: false,
    supportFile: false,
    setupNodeEvents(on, config) {
    },
  },
});
