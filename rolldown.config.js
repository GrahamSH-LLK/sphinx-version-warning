import { defineConfig } from "rolldown";

export default defineConfig({
  input: "versionwarning/_static/js/versionwarning.src.js",
  platform: "browser",
  output: {
    file: "versionwarning/_static/js/versionwarning.js",
    minify: {
      compress: { dropConsole: true },
    },
    format: "esm",
  },
});
