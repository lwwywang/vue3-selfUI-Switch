import esbuild from 'rollup-plugin-esbuild'
import vue from '@vitejs/plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
    input: 'src/lib/index.ts',
    output: [{
        globals: {
            vue: 'Vue'
        },
        name: 'shanxue',
        file: 'dist/lib/shanxue.js',
        format: 'umd',
        plugins: [terser()]
    }, {
        name: 'shanxue',
        file: 'dist/lib/shanxue.esm.js',
        format: 'es',
        plugins: [terser()]
    }],
    plugins: [
        scss({ include: /\.scss$/, sass: dartSass }),
        esbuild({
            include: /\.[jt]s$/,
            minify: process.env.NODE_ENV === 'production',
            target: 'es2015'
        }),
        vue({
            include: /\.vue$/,
        })
    ],
}