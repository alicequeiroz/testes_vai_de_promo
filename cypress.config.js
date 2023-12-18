const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.vaidepromo.com.br/',
    defaultCommandTimeout: 5000
  },
  
});