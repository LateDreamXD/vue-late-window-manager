import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './custom.scss';
import LWM from 'vue-late-window-manager';

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(LWM);
	}
} satisfies Theme