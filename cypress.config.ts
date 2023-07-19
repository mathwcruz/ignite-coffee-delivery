import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "src/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:5173",
    viewportWidth: 1200,
    viewportHeight: 840,
    video: false,
    videoUploadOnPasses: false,
    trashAssetsBeforeRuns: false,
    supportFile: false
  },
});
