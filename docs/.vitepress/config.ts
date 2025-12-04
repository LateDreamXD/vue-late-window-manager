import { defineConfig } from 'vitepress'
import {
	groupIconMdPlugin,
	groupIconVitePlugin,
	localIconLoader
} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Vue Late Window Manager",
	description: "Late Window Manager for Vue3",

	lastUpdated: true,
	cleanUrls: true,
	metaChunk: true,

	rewrites: {
		'en/:rest*': ':rest*'
	},

	locales: {
		root: {
			label: 'English',
			lang: 'en'
		},
		zh: {
			label: '简体中文',
			lang: 'zh',
			link: '/zh/'
		}
	},

	markdown: {
		config(md) {
			md.use(groupIconMdPlugin)
		}
	},

	vite: {
		plugins: [ groupIconVitePlugin() ],
	},

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Guide', link: '/guide/quick-start' },
			{ text: 'Reference', link: '/reference/options' }
		],

		editLink: {
			pattern: 'https://github.com/LateDreamXD/vue-late-window-manager/edit/main/docs/:path',
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

		langMenuLabel: 'Mult-Language',
	}
})
