import pluginTypescript from '@rollup/plugin-typescript';
import pluginBabel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import pluginResolve from '@rollup/plugin-node-resolve';
import pluginCommonjs from '@rollup/plugin-commonjs';
import { RollupOptions } from 'rollup';

const configuration: RollupOptions = {
  input: 'src/index.ts',
  plugins: [
    pluginResolve(),
    pluginCommonjs(),
    pluginTypescript(),
    getBabelOutputPlugin({ presets: [["@babel/preset-env", { "modules": false }]] }),
    pluginBabel({ babelHelpers: 'bundled' }),
  ],
  output: [
    {
      format: 'esm',
      file: 'dist/index.mjs'
    },
    {
      format: 'cjs',
      file: 'dist/index.cjs'
    },
  ]
}

export default configuration;