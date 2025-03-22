import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),

      typescript(),
      terser(),
    ],
  },
  {
    input: './dist/types/index.d.ts',
    output: {
      file: './dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
]
