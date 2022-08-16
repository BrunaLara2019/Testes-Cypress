const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'p5ppko',
    e2e: {
        reporter: "mochawesome",
        reporterOptions: {
            reportDir: "cypress/report/mochawesome-report",
            overwrite: true,
            html: true,
            json: false,
            timestamp: "mmddyyyy_HHMMss"
        }
    }
})