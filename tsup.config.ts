import { defineConfig } from 'tsup';
import dts from 'unplugin-dts/esbuild';
import Vue from 'unplugin-vue/esbuild';
import sassPlugin from 'esbuild-plugin-sass';

export default defineConfig([
	{
		entry: ['src/index.ts'],
		external: ['vue'],
		outDir: 'dist',
		bundle: true,
		format: ['esm', 'cjs'],
		platform: 'neutral',
		esbuildPlugins: [Vue(), dts({
			declarationOnly: true,
			exclude: ['test/**/*', 'icons.ts']
		})],
		minify: true,
		dts: false // use unplugin-dts
	},
	{
		entry: ['src/index.scss'],
		bundle: true,
		outDir: 'dist',
		esbuildPlugins: [sassPlugin()]
	}
]);
