import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: './src/components/index.ts',
    output: {
      file: './dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),

      typescript(),
    ],
  },
  {
    input: './dist/types/components/index.d.ts',
    output: {
      file: './dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
]
