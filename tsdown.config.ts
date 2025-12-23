import { defineConfig } from 'tsdown';
import Vue from 'unplugin-vue/rolldown';

export default defineConfig([
	{
		dts: { vue: true },
		external: ['vue'],
		format: {
			'cjs': {
				dts: false
			},
			'esm': {}
		},
		minify: true,
		platform: 'neutral',
		plugins: [Vue()],
		tsconfig: 'tsconfig.app.json'
	}
]);
