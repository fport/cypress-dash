const {defineConfig} = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    projectId: "test-dash",
    e2e: {
        //baseUrl: "http://0.0.0.0:1234",
        baseUrl: "https://www.iddaa.com",
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});
