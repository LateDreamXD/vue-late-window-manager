import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default <UserConfig>{
	root: './test',
	plugins: [vue()],
	resolve: {
		alias: {
			'vue-late-window-manager': '../src/index.js'
		}
	},
	server: {
		open: true
	}
}