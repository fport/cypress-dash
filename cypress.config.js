const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "test-dash",
  e2e: {
    //baseUrl: "http://0.0.0.0:1234",
    baseUrl: "https://www.iddaa.com",
  },
});
