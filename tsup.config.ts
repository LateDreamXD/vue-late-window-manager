import { defineConfig } from 'tsup';
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
		esbuildPlugins: [Vue()],
		clean: true,
		minify: true,
		dts: true
	},
	{
		entry: ['src/index.scss'],
		bundle: true,
		outDir: 'dist',
		esbuildPlugins: [sassPlugin()]
	}
]);
