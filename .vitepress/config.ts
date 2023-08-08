import { defineConfig } from 'vitepress'
import * as path from "path";
// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "灵感窗口",
    // base: path.join(__dirname, "../docs")
    outDir: path.resolve(__dirname, "../dist"),
    srcDir: path.resolve(__dirname, "../docs"),
})
