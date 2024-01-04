const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: "t9i76f",
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://jsonplaceholder.typicode.com",
    env: {
      site: "https://the-internet.herokuapp.com/challenging_dom",
      allure: true,
    },
  },
});
