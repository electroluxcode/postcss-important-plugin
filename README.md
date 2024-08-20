# usage

import { defineConfig, loadEnv, type UserConfig } from "vite";
// this plugin 
import plugin from "./plugin/index"
export default defineConfig((config): UserConfig => {

  const { PORT } = process.env;
  return {
    
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
      postcss:{
        plugins:[plugin()]
      },
    },
  
    
  };
});
