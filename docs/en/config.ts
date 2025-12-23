import { defineAdditionalConfig } from 'vitepress';
import { version } from '../../package.json';

export default defineAdditionalConfig({
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Guide', link: '/guide/quick-start' },
			{ text: 'Reference', link: '/reference/options' },
			{
				text: `v${version}`,
				items: [
					{ text: 'Release Notes', link: `https://github.com/LateDreamXD/vue-late-window-manager/releases/tag/${version}` }
				]
			}
		],

		editLink: {
			text: 'Edit this page on GitHub'
		},

		footer: {
			message: 'Released under the MIT License',
			copyright: 'Copyright © 2025-present LateDreamXD'
		},

		docFooter: {
			prev: 'Previous Page',
			next: 'Next Page'
		},

		outline: {
			label: 'On this page'
		},

		lastUpdated: {
			text: 'Last Updated at'
		},

		search: {
			provider: 'local'
		},

		sidebar: [
			{
				text: 'Guide',
				base: '/guide/',
				items: [
					{ text: 'Quick Start', link: 'quick-start' },
					{ text: 'Customization', link: 'customization' },
				]
			},
			{
				text: 'Reference',
				base: '/reference/',
				items: [
					{ text: 'Options', link: 'options' },
					{ text: 'Instance', link: 'instance' },
					{ text: 'Components', link: 'components' }
				]
			},
			{
				text: 'Types',
				base: '/types/',
				items: [
					{ text: 'Options (Types)', link: 'options' },
					{ text: 'Instance (Types)', link: 'instance' },
					// { text: 'Components (Types)', link: 'components' },
					{ text: 'Window (Types)', link: 'window' }
				]
			},
			{
				text: 'Other',
				items: [
					// TODO: Playground
					// { text: 'Playground', link: '/other/playground' },
					// { text: 'Example', link: '/other/example' },
					{ text: 'Update Plan', link: '/update-plan' }
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/LateDreamXD/vue-late-window-manager' }
		],

		langMenuLabel: 'Mult-Language'
	}
});
