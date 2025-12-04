import { defineAdditionalConfig } from 'vitepress';

export default defineAdditionalConfig({
	head: [
		['meta', { name: 'robots', content: 'noindex, nofollow' }]
	]
});