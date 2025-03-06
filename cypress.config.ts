// eslint-disable-next-line @typescript-eslint/no-require-imports
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4m1tim",
  e2e: {
    baseUrl: "http://localhost:5173",
  },
});
