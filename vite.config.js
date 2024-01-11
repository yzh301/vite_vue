/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2024-01-11 10:25:22
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2024-01-11 17:45:40
 * @FilePath: \vite_vue\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";
const pathSrc = path.resolve(__dirname, "src");
const envDir = path.resolve(__dirname, "./src/env");

export default defineConfig(({ command, mode }) => {
  console.log("🚀 ~ command:", command);
  // 获取 .env 环境配置文件
  const env = loadEnv(mode, process.cwd(), "VITE_");
  console.log("🚀 ~ env:", env, mode);
  return {
    envDir: envDir,
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@use "@/assets/styles/variables.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      UnoCSS({
        /* options */
        configFile: "uno.config.js",
      }),
    ],
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
  };
});
