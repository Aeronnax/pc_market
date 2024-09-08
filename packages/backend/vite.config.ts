// @ts-check

import typescript from '@rollup/plugin-typescript';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig((data) => {
  const localEnv = loadEnv(data.mode, process.cwd());

  return {
    plugins: [typescript()],
    define: {
      'process.env': {
        ...process.env,
        ...localEnv,
      },
    },
    // esbuild: false,
    build: {},
  };
});
