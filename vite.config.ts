import type { UserConfig } from 'vite';
import vue from 'unplugin-vue/vite';

export default <UserConfig>{
	root: './test',
	plugins: [vue()],
	resolve: {
		alias: {
			'vue-late-window-manager': '../src/index.js'
		}
	},
	server: {
		open: true,
		port: 3000
	}
}