// vite.config.js
import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

/** @type {import('vite').UserConfig} */
export default {
    build: {
        target : "esnext",  
    },
    plugins: [viteSingleFile()],
    // config options
  }